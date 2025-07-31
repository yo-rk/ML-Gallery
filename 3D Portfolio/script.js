const projects = [
  {
    title: "Disease Prediction",
    desc: `A multi-feature disease prediction system using symptom-based inputs. 
Implements a Decision Tree classifier to suggest likely diseases based on user response.
Built with Flask for the backend and trained on a labeled medical dataset.`,
    link: "https://github.com/yo-rk/CodeAlpha_DiseasePrediction",
    tags: ["#ML", "#Flask", "#DecisionTree"]
  },
  {
    title: "Handwritten Character Recognition",
    desc: `Deep learning-based application that classifies handwritten characters using CNN.
Trained on the EMNIST dataset, optimized with data augmentation and dropout layers.
Deployed as a lightweight client-facing demo using Flask and OpenCV preprocessing.`,
    link: "https://github.com/yo-rk/CodeAlpha_HandwrittenCharacterRecognition",
    tags: ["#CNN", "#TensorFlow", "#ComputerVision"]
  },
  {
    title: "Credit Scoring System",
    desc: `Machine Learning model that assesses creditworthiness from demographic and financial data.
Uses logistic regression to predict loan default risk with high recall precision.
Focused on preprocessing imbalanced datasets and feature engineering for better accuracy.`,
    link: "https://github.com/yo-rk/CodeAlpha_CreditScroing",
    tags: ["#LogisticRegression", "#Pandas", "#Finance"]
  }
];

const container = document.getElementById("cards-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";

  const tagsHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  card.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.desc}</p>
    <div class="tags">${tagsHTML}</div>
  `;

  card.onclick = () => window.open(project.link, "_blank");

  container.appendChild(card);
});
