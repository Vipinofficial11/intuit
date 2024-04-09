import React from "react";
import PriceCard from "./PriceCard";

function PriceCards() {
  return (
    <div className="w-full px-8 bg-black overflow-hidden h-screen" id="price">
      <PriceCard cards={cardDetails} />
    </div>
  );
}

const cardDetails = [
  {
    title: "Premium",
    description:
      "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
    price: { actual: "23,000", discount: "11,500" },
    pointers: [
      "Phone & Priority Support",
      "Custom-coded and Pre-built Email Templates",
      "Multivariate and A/B Testing",
      "Enhanced Automated Customer Journeys",
      "Dedicated Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    title: "Standard",
    description:
      "Sell even more with personalization, optimization tools, and enhanced automations.",
    price: { actual: "1,150", discount: "575" },
    pointers: [
      "24/7 Email & Chat Support",
      "Custom-coded and Pre-built Email Templates",
      "Multivariate & A/B Testing",
      "Enhanced Automated Customer Journeys",
      "Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    title: "Essentials",
    description:
      "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
    price: { actual: "770", discount: "385" },
    pointers: [
      "24/7 Email & Chat Support",
      "Pre-built Email Templates",
      "A/B Testing",
      "Basic Automated Customer Journeys",
    ],
  },
];

export default PriceCards;
