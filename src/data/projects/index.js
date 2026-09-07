import { churnPredictionProject } from "./churnPrediction";
import { dataQualityProject } from "./dataQuality";
import { mlopsPipelineProject } from "./mlopsPipeline";
import { tweetsSentimentProject } from "./tweetsSentiment";
import { aiSummarizerProject } from "./aiSummarizer";
import { fraudDetectionProject } from "./fraudDetection";
import { hybridMovieRecommenderProject } from "./hybridMovieRecommender";
import { chatbotProject } from "./chatbot";
import { trafficMVPProject } from "./trafficMVP";
import { accidentDetectionProject } from "./accidentDetection";
import pfeCoverBase64Part00 from "../../../build-assets/pfe-cover/part00.b64?raw";
import pfeCoverBase64Part01 from "../../../build-assets/pfe-cover/part01.b64?raw";
import pfeCoverBase64Part02 from "../../../build-assets/pfe-cover/part02.b64?raw";
import pfeCoverBase64Part03 from "../../../build-assets/pfe-cover/part03.b64?raw";

// The optimized PFE cover is embedded in the production bundle so the image
// remains reliable on GitHub Pages without asset-path or browser-cache issues.
const pfeCoverBase64 = [
  pfeCoverBase64Part00,
  pfeCoverBase64Part01,
  pfeCoverBase64Part02,
  pfeCoverBase64Part03,
]
  .join("")
  .replace(/\s+/g, "");

const pfeCoverDataUrl = `data:image/webp;base64,${pfeCoverBase64}`;

// Only the project cover is overridden. The System Architecture image remains
// defined inside accidentDetectionProject.overview and is not modified here.
const accidentDetectionProjectWithCover = {
  ...accidentDetectionProject,
  image: pfeCoverDataUrl,
};

// Organized by creation date - most recent projects first
export const projectsData = [
  accidentDetectionProjectWithCover, // 2026-08 - PFE Accident Detection
  chatbotProject,                    // 2026-07 - OpenLegaMa Legal AI
  hybridMovieRecommenderProject,
  fraudDetectionProject,
  aiSummarizerProject,               // 2026-03-22
  trafficMVPProject,                 // Traffic Image Processing
  tweetsSentimentProject,            // 2026-02-06
  mlopsPipelineProject,              // 2025-12-21
  dataQualityProject,                // 2025-12-06
  churnPredictionProject,            // 2025-11-29
];

const projectPresentation = {
  "real-time-road-accident-detection": {
    primaryDomain: "Computer Vision",
    projectFocus: ["Deep Learning", "Real-Time Video Analytics", "Road Safety"],
  },
  "openlegama-moroccan-legal-ai": {
    primaryDomain: "GenAI & RAG",
    projectFocus: ["Controlled RAG", "Legal AI", "Multilingual NLP"],
  },
  "8-hybrid-movie-recommender": {
    primaryDomain: "Machine Learning",
    projectFocus: [
      "Recommender Systems",
      "Collaborative Filtering",
      "Content-Based Filtering",
    ],
  },
  "ai-powered-bank-fraud-detection-machine-learning-explainable-ai": {
    primaryDomain: "Machine Learning",
    projectFocus: ["Fraud Detection", "Explainable AI", "Imbalanced Classification"],
  },
  "5-ai-summarizer-2026-03": {
    primaryDomain: "GenAI & RAG",
    projectFocus: ["NLP", "Document Processing", "Text Summarization"],
  },
  "traffic-mvp-image-processing": {
    primaryDomain: "Computer Vision",
    projectFocus: ["Object Detection", "Traffic Analytics", "Real-Time Monitoring"],
  },
  "pulsestream-real-time-social-media-intelligence": {
    primaryDomain: "Machine Learning",
    projectFocus: ["NLP", "Sentiment Analysis", "Big Data Analytics"],
  },
  "customer-churn-mlops-platform": {
    primaryDomain: "MLOps & Data Engineering",
    projectFocus: ["ML Orchestration", "Experiment Tracking", "Model Monitoring"],
  },
  "2-data-quality-monitoring-2025-12": {
    primaryDomain: "MLOps & Data Engineering",
    projectFocus: ["Data Quality", "Observability", "Data Monitoring"],
  },
  "1-customer-analytics-churn-prediction-2025-11": {
    primaryDomain: "Machine Learning",
    projectFocus: ["Predictive Analytics", "Customer Churn", "Business Intelligence"],
  },
};

const legacyProjectSlugAliases = {
  "6-fraud-detection-app": "ai-powered-bank-fraud-detection-machine-learning-explainable-ai",
};

export const getProjectBySlug = (slug) => {
  const canonicalSlug = legacyProjectSlugAliases[slug] ?? slug;
  const project = projectsData.find((p) => p.slug === canonicalSlug);

  if (!project) return undefined;

  const presentation = projectPresentation[project.slug];
  return presentation ? { ...project, ...presentation } : project;
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
