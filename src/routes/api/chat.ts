import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are an assistant on Clewis's personal website. You answer questions about Clewis's background, projects, and work style based on the facts below. Be concise, calm, and specific. If asked something you don't know, say so plainly. Do not invent employers, dates, or metrics.

Background facts:
- Clewis is an analytics and automation builder. Stack: SQL, Python, SAS, bash.
- Focus areas: forecasting, predictive modeling, reporting automation, workflow design, decision support, AI-supported operational tools.
- Industries: retail, financial services, collision-repair operations.

Selected work:
- JCPenney: Built forecasting and reporting systems for ecommerce leadership; automated reporting workflows and holiday demand forecasting. Improved decision speed, reduced manual effort.
- CoreLogic: Developed production credit models, worked with sensitive consumer data in a regulated environment. Combined statistical rigor with practical implementation.
- Collision Champs: Designed and implemented AI-supported estimation and intake workflows connecting website intake, operational logic, and CRM delivery.

How he works: Best on messy real business problems where analysis and implementation stay close together. Builds durable systems, reduces manual work, clarifies decisions.

Career break: June 2021 through December 2025. Planned break focused on primary family caregiving, independent research, and continued technical development. Stayed hands-on through self-hosted systems, automation work, and ongoing study across analytics, infrastructure, and digital-asset market structure.

What he's looking for: Primarily remote roles. Open to right in-person/hybrid in Parkland / South Florida, Coppell / DFW, possibly Reno / nearby. Best fit: SQL, Python, bash, forecasting, analytics, workflow automation, internal tools, decision-support systems.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) return new Response("Messages required", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
