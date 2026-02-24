export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  desc: string;
  tech: string[];
  images?: string[];
  links: ProjectLink[];
  result?: string;
  source: "github" | "kaggle";
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  // WSU Wheat Yield Prediction
  {
    title: "WSU Wheat Yield Prediction",
    desc: "Multispectral computer vision pipeline predicting wheat health from UAV imagery using vegetation indices and YOLOv8-based detection.",
    tech: ["PyTorch", "YOLOv8", "Multispectral Imaging", "Feature Engineering"],
    images: [
      "/panel-preds.jpg",
      "/wheat-preds.jpg",
    ],
    result: "80-82% test accuracy",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/WSU-Wheat-Predictions" },
      { label: "Presentation", href: "/pdfs/wsu-wheat.pdf" },
    ],
    source: "github",
    tags: ["CV", "Deep Learning", "Classification", "Research"],
    featured: true,
  },
  // US Accident Severity Prediction
  {
    title: "US Accident Severity Prediction",
    desc: "Multi-class classification on 1.5M+ US traffic records using feature engineering and XGBoost, addressing heavy class imbalance.",
    tech: ["Scikit-learn", "XGBoost", "Python", "Pandas"],
    images: [
      "/accident-roc-curve.png",
      "/accident-val-plots.png",
    ],
    result: "AUROC 0.91 (macro)",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/us-accident-severity-prediction" },
      { label: "Kaggle Dataset", href: "https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents" },
    ],
    source: "github",
    tags: ["Tabular", "Classification", "Imbalanced Data"],
    featured: true,
  },
  // Sports Market Efficiency Pipeline
  {
    title: "Sports Market Efficiency Pipeline",
    desc: "End-to-end ETL + analytics system ingesting live sportsbook odds and game results into SQLite, powering a Streamlit dashboard for close-line, calibration, and strategy simulation.",
    tech: ["Python", "ETL", "SQLite", "APIs", "Streamlit"],
    images: [
      "/demo-0.png",
      "/demo-1.png",
    ],
    result: "ETL + live dashboard",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/sports-odds-pipeline" },
      { label: "Website", href: "https://sports-market-efficiency.streamlit.app/" },
    ],
    source: "github",
    tags: ["ETL", "Analytics", "APIs"],
    featured: true,
  },
  // Heart Disease Prediction
  {
    title: "Heart Disease Prediction",
    desc: "Binary classification model predicting heart disease risk from clinical features using ROC-AUC evaluation.",
    tech: ["Python", "Scikit-learn", "Tabular ML"],
    images: ["/heart-disease-header.png"],
    result: "ROC-AUC 0.951",
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/vishaljeyam/predicting-heart-disease" },
      { label: "Competition", href: "https://www.kaggle.com/competitions/playground-series-s6e2" },
    ],
    source: "kaggle",
    tags: ["Tabular", "Classification"],
    featured: false,
  },
  // Disaster Tweet Classification (NLP)
  {
    title: "Disaster Tweet Classification",
    desc: "NLP classifier identifying real disaster tweets using text preprocessing and F1-optimized evaluation.",
    tech: ["Python", "NLP", "Scikit-learn"],
    images: ["/nlp-header.png"],
    result: "F1 0.805",
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/vishaljeyam/nlp-disaster-tweets" },
      { label: "Competition", href: "https://www.kaggle.com/competitions/nlp-getting-started" },
    ],
    source: "kaggle",
    tags: ["NLP", "Classification"],
    featured: false,
  },
  // Telco Customer Churn Prediction
  {
    title: "Telco Customer Churn",
    desc: "Binary churn classification with model benchmarking (Logistic Regression, Random Forest, Gradient Boosting), evaluated via ROC-AUC and PR-AUC to handle class imbalance.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    images: [
      "/telco-header.jpg",
      "/gb-roc.png",
      "/model-comparison.png",
    ],
    result: "ROC-AUC 0.844",
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/vishaljeyam/telecommunication-churn-preds" },
      { label: "Dataset", href: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn/data" },
    ],
    source: "kaggle",
    tags: ["Tabular", "Classification", "Model Comparison"],
    featured: false,
  },
  // Chicago Restaurant Health Inspection Risk Scoring
  {
    title: "Restaurant Health Inspection Risk (Chicago)",
    desc: "Built a risk-scoring model to prioritize restaurant inspections by predicting likelihood of critical violations; produced an interactive risk map and evaluated ranking performance.",
    tech: ["Python", "Scikit-learn", "Risk Scoring", "EDA"],
    result: "ROC-AUC 0.63 (RF)",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/Restaurant-Health-Inspection" },
      // Add this once you host the HTML in /public (see below)
      // { label: "Risk Map", href: "/projects/chicago-risk-map.html" },
    ],
    // Optional images for your new lightbox system:
    images: [
      "/chicago-risk-map.png",
      "/roc-curve.png",
    ],
    source: "github",
    tags: ["Tabular", "Classification", "Imbalanced Data", "Visualization"],
    featured: false,
  }
];
