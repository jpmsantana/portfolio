export interface ResearchItem {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export const researches: ResearchItem[] = [
  {
    slug: "burnout-analysis",
    title:
      "Decoding Work From Home Burnout: A Machine Learning Deep Dive",
    description:
      "Can we predict employee burnout before it happens? A data-driven exploration of 1,800+ work patterns to uncover the hidden drivers of burnout using Random Forest, SHAP analysis, and feature engineering.",
    tags: ["Machine Learning", "Data Analysis", "Employee Wellness"],
  },
];
