import { HoverEffect } from "./CardsHoverEffect";

export default function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-1">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title:
      "Millions of users trust us with their email marketing. You can too.",
    description: "",
    link: "",
  },
  {
    title: "Easy for beginners",
    description:
      "Our email marketing platform makes it easy for marketers in any type of business to send professional, engaging marketing emails.  From drag and drop editors to powerful automations and developer APIs, Mailchimp is built to help you sell more—no matter the complexity of your business.",
    link: "",
  },
  {
    title: "Leader in deliverability",
    description:
      "Unlike other platforms, Mailchimp makes sure your marketing emails get delivered. We're top-ranked in email deliverability, which means more of your emails reach your customers, not just their junk folders.",
    link: "",
  },
  {
    title: "All marketing data in one place",
    description:
      "Make Mailchimp your single source of truth for marketing activities.  Manage your marketing holistically with our omni-channel campaign manager. We also offer 300+ integrations with the most widely used marketing and e-commerce software providers, so you have everything you need in a single location.",
    link: "",
  },
  {
    title: "Mailchimp AI Expert",
    description:
      "Mailchimp analyzes hundreds of millions of data points and then gives you suggestions for crafting better-performing emails. Generate professionally written, on-brand marketing emails with the press of a button.",
    link: "",
  },
  {
    title: "Track, analyze, and optimize your impact",
    description:
      "Advanced analytics and reporting tools help you make the most out of your campaigns.  Mailchimp integrates with software you already use, like Shopify and Google Analytics, to unlock powerful insights from your e-commerce and campaign data.",
    link: "",
  },
];
