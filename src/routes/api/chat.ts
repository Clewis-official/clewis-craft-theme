import { createFileRoute } from "@tanstack/react-router";
import OpenAI from "openai";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

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
        const { messages } = (await request.json()) as { messages?: ChatMessage[] };
        if (!Array.isArray(messages)) {
          return Response.json({ error: "Messages required." }, { status: 400 });
        }

        const key = process.env.OPENAI_API_KEY;
        if (!key) {
          return Response.json({ error: "Missing OPENAI_API_KEY." }, { status: 500 });
        }

        const openai = new OpenAI({ apiKey: key });
        const model = process.env.OPENAI_CHAT_MODEL ?? "gpt-4.1-mini";

        try {
          const response = await openai.responses.create({
            model,
            instructions: SYSTEM_PROMPT,
            input: messages.map((message) => ({
              role: message.role,
              content: [
                {
                  type: message.role === "assistant" ? "output_text" : "input_text",
                  text: message.text,
                },
              ],
            })),
          });

          const text = response.output_text?.trim();
          if (!text) {
            return Response.json(
              { error: "OpenAI returned an empty response." },
              { status: 502 },
            );
          }

          return Response.json({ message: text });
        } catch (error) {
          console.error("Chat request failed", error);
          return Response.json({ error: "Chat request failed." }, { status: 502 });
        }
      },
    },
  },
});
