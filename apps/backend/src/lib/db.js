// For now, I using a predefined responses in an array
// because this will deployed to Vercel, which Vercel only
// supports serverless DB only

import Fuse from "fuse.js";

// Answer were acquired from WikiPedia
const responses = [
  {
    question: "What is FLIN?",
    response:
      "FLIN is the latest platform that offers debt management solutions, specifically consolidation, restructuring, and debt settlement funding through the Bailout Program.<br />Through this platform, we hope to be able to help borrowers who are experiencing challenges in paying off loans or are trapped in debt so that they can regain control of their financial condition.",
  },
  {
    question: "Is FLIN safe and reliable to help pay off my debt?",
    response:
      "Yes, the Bailout Program is safe. FLIN works with trusted financial institutions registered and supervised by the Financial Services Authority (OJK) in Indonesia, ensuring a safe and transparent process.",
  },
  {
    question: "What types of debt can FLIN help you pay off?",
    response:
      "For now, we help pay off debts for unsecured loans such as KTA, credit cards, pinjol, and paylater.",
  },
  {
    question: "What is loan consolidation?",
    response:
      "Debt consolidation or loan consolidation is a form of debt refinancing that entails taking out one loan to pay off many others. This commonly refers to a personal finance process of individuals addressing high consumer debt, but occasionally it can also refer to a country's fiscal approach to consolidate corporate debt or government debt.",
  },
];

export const db = new Fuse(responses, {
  keys: ["question"],
});
