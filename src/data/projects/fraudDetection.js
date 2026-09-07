export const fraudDetectionProject = {
  id: 6,
  slug: "ai-powered-bank-fraud-detection-machine-learning-explainable-ai",
  title: "AI-Powered Bank Fraud Detection — Machine Learning & Explainable AI",
  description:
    "Machine-learning credit-card fraud detection system built on the Kaggle Credit Card Fraud Detection dataset (284,807 transactions, including 492 fraud cases). Uses a Random Forest model with an interactive Streamlit dashboard for transaction analysis, fraud-risk probabilities, and feature-importance inspection.",
  image: "assets/images/projects/fraud-detection/main.png",
  tags: ["Python", "Machine Learning", "Random Forest", "Fraud Detection"],
  link: "/projects/ai-powered-bank-fraud-detection-machine-learning-explainable-ai",
  github: "https://github.com/YOUSSEF-BT/AI-Powered-Bank-Fraud-Detection-Machine-Learning-Explainable-AI",
  company: "Personal Project",
  period: "2025-11",
  location: "Morocco",
  role: "AI Engineer & Data Scientist",
  overview: {
    architectureImage: "assets/architecture/Fraud Detection System.png",
    keyContributions: [
      "Built a credit-card fraud detection workflow around a Random Forest classifier",
      "Worked with the Kaggle dataset of 284,807 transactions and 492 fraud cases",
      "Created an interactive Streamlit dashboard for transaction analysis",
      "Added transaction testing with fraud/normal probability outputs",
      "Visualized feature importance to make model behavior easier to inspect",
    ],
  },
  problemStatement: {
    title: "Banking Fraud Challenge",
    description:
      "Credit-card fraud detection is a highly imbalanced binary-classification problem where fraudulent transactions represent only a very small fraction of the available data. The objective is to identify suspicious transactions while keeping the model understandable and practical to test.",
    challenges: [
      "Handling extreme class imbalance",
      "Detecting rare fraudulent transactions",
      "Providing interpretable model outputs",
      "Allowing interactive transaction-level testing",
      "Keeping the workflow reproducible with a public benchmark dataset",
    ],
  },
  solution:
    "Implemented a Random Forest-based fraud detection workflow using the public Kaggle credit-card fraud dataset, together with a Streamlit interface for dataset exploration, transaction testing, prediction probabilities, and feature-importance analysis.",
  keyAchievements: [
    "Reported 99.96% model accuracy in the original project evaluation",
    "Analyzed 284,807 transactions containing 492 fraud cases (0.1727% fraud rate)",
    "Built an interactive Streamlit dashboard for fraud analysis",
    "Added transaction-level testing with class predictions and probability scores",
    "Created feature-importance visualizations for model interpretation",
  ],
  techStack: [
    "Python",
    "Streamlit",
    "Scikit-learn",
    "Random Forest",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Joblib",
  ],
  modules: [
    {
      id: 1,
      name: "Fraud Detection Model",
      description: "Random Forest classifier used for binary fraud detection.",
      details:
        "The public project implementation uses scikit-learn and a serialized Random Forest model to classify credit-card transactions and expose prediction probabilities.",
      metrics: {
        model: "Random Forest",
        task: "Binary Classification",
        output: "Class + Probability",
        dataset: "Kaggle Credit Card Fraud",
      },
    },
    {
      id: 2,
      name: "Interactive Monitoring Dashboard",
      description: "Streamlit dashboard for transaction analysis and model inspection.",
      details:
        "The dashboard provides dataset statistics, fraud-rate monitoring, transaction testing, fraud probabilities, and feature-importance analysis.",
      metrics: {
        interface: "Streamlit",
        testing: "Interactive",
        probabilities: "predict_proba",
        explainability: "Feature Importance",
      },
    },
  ],
  dataset: {
    name: "Credit Card Fraud Detection",
    source: "Kaggle — ULB Credit Card Fraud Detection dataset",
    volume: "284,807 transactions",
    annotation: "Binary Class label: 0 = legitimate, 1 = fraudulent",
    classes: [
      { name: "Legitimate", label: "Class 0", distribution: "284,315" },
      { name: "Fraudulent", label: "Class 1", distribution: "492" },
    ],
  },
  challenges: {
    imbalancedData: {
      problem: "Extreme class imbalance with only 492 fraud cases among 284,807 transactions",
      solution:
        "Made the imbalance explicit in the dashboard and evaluation workflow and exposed transaction-level fraud probabilities rather than relying only on a class label.",
    },
    interpretability: {
      problem: "Understanding which anonymized transaction features influence predictions",
      solution:
        "Added feature-importance analysis so the strongest Random Forest signals can be inspected directly from the dashboard.",
    },
    interactiveTesting: {
      problem: "Making model behavior easy to test without writing code for each transaction",
      solution:
        "Built Streamlit transaction-testing flows that display the predicted class together with fraud and normal probabilities.",
    },
  },
  liveDemo: {
    url: "https://fraud-detection-system-demo.vercel.app",
    description:
      "Interactive fraud detection demo with transaction analysis and risk-probability visualization.",
  },
  results: {
    accuracy: "99.96%",
    transactions: "284,807",
    fraudCases: "492",
    fraudRate: "0.1727%",
  },
  team: ["Youssef Bouzit"],
  supervisor: "Self-directed",
};
