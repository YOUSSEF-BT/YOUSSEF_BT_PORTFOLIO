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

const legacyProjectSlugAliases = {
  "6-fraud-detection-app": "ai-powered-bank-fraud-detection-machine-learning-explainable-ai",
};

export const getProjectBySlug = (slug) => {
  const canonicalSlug = legacyProjectSlugAliases[slug] ?? slug;
  return projectsData.find((p) => p.slug === canonicalSlug);
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
