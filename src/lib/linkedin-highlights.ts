export type LinkedInHighlight = {
  id: string;
  title: string;
  summary: string;
  suggestedUse: "hero" | "homepage" | "resume" | "case-study" | "interview";
};

export type Endorsement = {
  id: string;
  recommenderName: string;
  recommenderTitle: string;
  relationship: string;
  date: string;
  featuredLine: string;
  quote: string;
  quoteStatus: "full" | "excerpt";
};

export const LINKEDIN_HIGHLIGHTS: LinkedInHighlight[] = [
  {
    id: "jcp-peak-monitoring",
    title: "Peak-period ecommerce monitoring",
    summary:
      "Built an hourly reporting process that replaced manual four-hour peak checks and stayed in use for JCP.com Black Friday through Cyber Monday monitoring years later.",
    suggestedUse: "homepage",
  },
  {
    id: "jcp-weekly-business-review",
    title: "Executive reporting automation",
    summary:
      "Built an Amazon-style Weekly Business Review workflow for JCP.com executives and reduced recurring production from multiple people over two hours to one person in roughly fifteen minutes.",
    suggestedUse: "resume",
  },
  {
    id: "jcp-holiday-forecasting",
    title: "Independent holiday forecasting",
    summary:
      "Produced independent divisional holiday forecasts to surface risk in the existing corporate forecast during high-variance retail periods.",
    suggestedUse: "homepage",
  },
  {
    id: "jcp-weather-tool",
    title: "Weather-impact decision support",
    summary:
      "Built an analytical tool to measure and visualize the effect of weather conditions on brick-and-mortar store performance and presented findings to the head of Customer Strategy.",
    suggestedUse: "case-study",
  },
  {
    id: "jcp-cmo-dashboard-pipeline",
    title: "Multi-source dashboard pipeline",
    summary:
      "Built data cleansing and preparation flows for a CMO dashboard using SAS, SQL, VBA, PowerQuery, and PuTTY across eight company data sources.",
    suggestedUse: "resume",
  },
  {
    id: "unt-teaching",
    title: "Teaching and explanation credibility",
    summary:
      "Taught introductory microeconomics as a lecturer and posted the highest department comprehensive final average in the first semester.",
    suggestedUse: "interview",
  },
  {
    id: "corelogic-hackathons",
    title: "Applied machine-learning wins",
    summary:
      "Placed first in a deep-learning hackathon for hourly bicycle demand prediction and third in an image-model hackathon for detecting solar panels from aerial photography.",
    suggestedUse: "homepage",
  },
  {
    id: "corelogic-publication",
    title: "Published risk-analysis work",
    summary: "Credited on the 2019 Renter Applicant Risk Report at CoreLogic.",
    suggestedUse: "case-study",
  },
];

export const LINKEDIN_ENDORSEMENTS: Endorsement[] = [
  {
    id: "mark-long-2019",
    recommenderName: "Jeffrey (Mark) Long",
    recommenderTitle: "President, Vector Credit, LLC",
    relationship: "Worked with Aaron on different teams at CoreLogic",
    date: "2019-11-15",
    featuredLine: "Often presenting to various levels of management.",
    quote:
      'Aaron consistently produced excellent work, was a great team player, and displayed good communication skills...often presenting to various levels of management. In addition, Aaron "thinks outside the box" and brought new ideas and techniques to improve analysis results. I would highly recommend Aaron to future employers.',
    quoteStatus: "full",
  },
  {
    id: "liang-tian-2019",
    recommenderName: "Liang Tian, Ph.D.",
    recommenderTitle:
      "Science & Analytics Executive, Information Services, Certified Public Manager",
    relationship: "Managed Aaron directly at CoreLogic",
    date: "2019-10-25",
    featuredLine: 'He has the best "can-do" attitude I have ever seen.',
    quote:
      'Aaron was on my team and we collaborated very closely in the last couple of years on creating new/innovative analytics solutions in various domains such as alternative lending, rental analytics, and consumer credit, etc. As Sr. Leader of CoreLogic Science & Analytics Center of Excellence, I found working with Aaron extremely pleasant. He has the best "can-do" attitude I have ever seen. He is the one willing to jump onto any projects in need and deliver quality results. Aaron\'s strong skill sets on data science, analytics modeling, machine learning and most importantly his business acumen and his creative mind set truly amazed me! As a result, Aaron was able to deliver a number of high visible and impactful analytics models/solutions to CoreLogic businesses and ultimately drive revenue growth! I am positive that Aaron will be an undoubted asset for any data & analytics organization.',
    quoteStatus: "full",
  },
  {
    id: "yangyan-zhou-2019",
    recommenderName: "Yangyan Zhou",
    recommenderTitle:
      "Principal Data Scientist at The Janssen Pharmaceutical Companies of Johnson & Johnson",
    relationship: "Worked with Aaron on the same team",
    date: "2019-10-16",
    featuredLine: "He can make things happen.",
    quote:
      "I have been working with Aaron closely for several projects in the same team and he is very professional and I am very impressed of his skillsets as data scientist and capability for solving problems as well as his passion about doing the work. He has strong background in financial and credit industry. I am confident when working with him and he can make things happen and make the project going well.",
    quoteStatus: "full",
  },
  {
    id: "david-parma-2015",
    recommenderName: "David Parma",
    recommenderTitle: "Digital Marketing, DTC, Analytics and E-commerce Professional",
    relationship: "Managed Aaron directly at JCPenney",
    date: "2015-09-01",
    featuredLine: "One of the top 3 programmers.",
    quote:
      "Aaron is a very hard working person. Within JCPenney, which is a SAS shop, I would put him as one of the top 3 programmers. He can build almost anything from automated text alerts during peak to marketing models based on clickstream data. Whoever Aaron is working for he'll continue to surprise and delight.",
    quoteStatus: "full",
  },
  {
    id: "damyan-marinov-2013",
    recommenderName: "Damyan Marinov",
    recommenderTitle: "Seasoned Data Engineer / Data Analytics Engineer",
    relationship: "Worked with Aaron at Javelin Direct",
    date: "2013-07-02",
    featuredLine: "Excellent attention to detail.",
    quote:
      "Aaron has an excellent attention to detail and highly developed curiosity and ability to understand the underlying causes. He is also well organized and with excellent work ethic, which helped him excel in his role. I would highly recommend Aaron as a valuable addition to any analytical team.",
    quoteStatus: "full",
  },
];
