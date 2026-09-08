import { useState, useEffect } from "react";
import { Award, ExternalLink, ArrowLeft, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

const issuerLogoDomains = {
  "Oracle": "oracle.com",
  "Anthropic": "anthropic.com",
  "LinkedIn": "linkedin.com",
  "LinkedIn Learning Community": "linkedin.com",
  "IBM Cognitive Class": "ibm.com",
  "OpenCV University": "opencv.org",
  "KNIME": "knime.com",
  "Anaconda": "anaconda.com",
};

export const CertificationIssuerLogo = ({ issuer }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const domain = issuerLogoDomains[issuer];

  if (!domain || logoFailed) {
    return <Award className="w-6 h-6 text-primary" />;
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${issuer} logo`}
      className="w-7 h-7 md:w-8 md:h-8 object-contain rounded-md"
      onError={() => setLogoFailed(true)}
      decoding="async"
    />
  );
};


export const certifications = [
  {
    id: 5,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Comprehensive training in Claude AI assistant, prompt engineering, and AI interaction best practices.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/669dhjfv4jgt",
    category: "prompt-engineering",
  },
  {
    id: 6,
    title: "AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Training focused on understanding AI capabilities, limitations, reliability boundaries, failure modes, and responsible use of AI systems.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/5wfw9hexvaax",
    category: "anthropic",
  },
  {
    id: 7,
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Training in AI fluency for educational contexts, understanding AI tools and their applications in teaching and learning.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/qettazf8qd36",
    category: "anthropic",
  },
  {
    id: 8,
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Advanced training in Claude Code for software development, code review, and AI-assisted programming.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/66qabf9vriu9",
    category: "anthropic",
  },
  {
    id: 9,
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Training in AI fluency for students, understanding AI tools and their applications in learning and development.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/b9sh9wj2tb6b",
    category: "anthropic",
  },
  {
    id: 10,
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Foundational training in AI fluency framework, understanding core AI concepts and their practical applications.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/nr75vo6xp889",
    category: "anthropic",
  },
  {
    id: 11,
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Advanced training in teaching the AI fluency framework, methodologies for educating others about AI concepts and applications.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/p44jhhdgju3z",
    category: "anthropic",
  },
  {
    id: 12,
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Training in AI fluency for nonprofit organizations, understanding AI tools and their applications in social impact work.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/nm4fhq8fjw3j",
    category: "anthropic",
  },
  {
    id: 13,
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Introduction to Claude Cowork, understanding AI collaboration tools and their applications in team workflows.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/7eahci6bmgxb",
    category: "anthropic",
  },
  {
    id: 14,
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Introduction to agent skills, understanding AI agent capabilities and their applications in automated workflows.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/wy7mgcgom536",
    category: "agentic-ai-llms",
  },
  {
    id: 15,
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Introduction to subagents, understanding hierarchical AI systems and their applications in complex task management.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/mmyj2epvatui",
    category: "agentic-ai-llms",
  },
  {
    id: 16,
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Introduction to Model Context Protocol, understanding standardized communication between AI models and external tools.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/twqnruaazwjq",
    category: "agentic-ai-llms",
  },
  {
    id: 17,
    title: "Claude with Google Cloud's Vertex AI",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Training in integrating Claude with Google Cloud's Vertex AI platform for enterprise AI solutions.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/hkxuzh9i8mbd",
    category: "anthropic",
  },
  {
    id: 18,
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Advanced training in Model Context Protocol, exploring complex implementations and enterprise use cases.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/pramdigjasq9",
    category: "agentic-ai-llms",
  },
  {
    id: 19,
    title: "Claude in Amazon Bedrock",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Training in using Claude with Amazon Bedrock, understanding AWS integration and enterprise AI deployment.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/rkepkwh37idh",
    category: "anthropic",
  },
  {
    id: 20,
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Comprehensive training in building applications with the Claude API, including prompt engineering, API integration, and best practices for production deployments.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/tharwi7o229k",
    category: "agentic-ai-llms",
  },
  {
    id: 21,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Practical training in Claude Code for real-world software development, including hands-on projects and advanced AI-assisted programming techniques.",
    icon: <Award className="w-6 h-6" />,
    link: "https://verify.skilljar.com/c/gmxxb5rt47dw",
    category: "anthropic",
  },
  {
    id: 102,
    title: "Claude Academy: AI Fluency for pK–12 Educators",
    issuer: "Anthropic",
    date: "Aug 2026",
    credentialId: "043d6624c8f26fbecd0be08bfbbcb151",
    description: "Practical AI fluency training for pK–12 education, covering responsible Claude use, effective delegation, evaluation, and classroom workflows.",
    icon: <Award className="w-6 h-6" />,
    link: "https://academy.claude.com/verify/043d6624c8f26fbecd0be08bfbbcb151",
    category: "anthropic",
  },
  {
    id: 103,
    title: "Claude Academy: AI Fluency for Creative Work",
    issuer: "Anthropic",
    date: "Aug 2026",
    credentialId: "89a0959713560284be32adea434a5b97",
    description: "AI fluency for creative workflows, focusing on collaborating with Claude for ideation, drafting, iteration, and responsible creative production.",
    icon: <Award className="w-6 h-6" />,
    link: "https://academy.claude.com/verify/89a0959713560284be32adea434a5b97",
    category: "anthropic",
  },
  {
    id: 104,
    title: "Claude Academy: AI Fluency for Small Businesses",
    issuer: "Anthropic",
    date: "Aug 2026",
    credentialId: "3344bddad7340844c2ab7c09c7d61c56",
    description: "Practical AI fluency for small businesses, covering Claude-assisted operations, productivity, decision support, and responsible adoption.",
    icon: <Award className="w-6 h-6" />,
    link: "https://academy.claude.com/verify/3344bddad7340844c2ab7c09c7d61c56",
    category: "anthropic",
  },
  {
    id: 105,
    title: "Claude Academy: Deploying Claude Enterprise with Confidence: The five decisions that shape your rollout",
    issuer: "Anthropic",
    date: "Aug 2026",
    credentialId: "b96cdded36c3413418125e3e61d23310",
    description: "Enterprise deployment training focused on the five key decisions that shape a secure, effective, and scalable Claude rollout.",
    icon: <Award className="w-6 h-6" />,
    link: "https://academy.claude.com/verify/b96cdded36c3413418125e3e61d23310",
    category: "anthropic",
  },
  {
    id: 106,
    title: "Claude Academy: AI Fluency for Builders",
    issuer: "Anthropic",
    date: "Aug 2026",
    credentialId: "b655ec5f1364105a670a01c79d581ef0",
    description: "AI fluency for builders, covering effective collaboration with Claude across product development, prototyping, technical workflows, and evaluation.",
    icon: <Award className="w-6 h-6" />,
    link: "https://academy.claude.com/verify/b655ec5f1364105a670a01c79d581ef0",
    category: "anthropic",
  },
  {
    id: 107,
    title: "Claude Academy: Claude Platform 101",
    issuer: "Anthropic",
    date: "Aug 2026",
    credentialId: "d9a17d8d3e773246c479e8fbe32d5562",
    description: "Foundational training on the Claude Platform, including core capabilities, platform concepts, API-oriented workflows, and best practices for building with Claude.",
    icon: <Award className="w-6 h-6" />,
    link: "https://academy.claude.com/verify/d9a17d8d3e773246c479e8fbe32d5562",
    category: "agentic-ai-llms",
  },
  {
    id: 23,
    title: "OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Comprehensive training in OpenCV for computer vision applications, image processing, and real-time video analysis.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/OpenCV Free OpenCV Bootcamp Certificate _ OpenCV.pdf`,
    category: "computer-vision",
  },
  {
    id: 24,
    title: "Vision Language Models (VLM) Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Advanced training in Vision Language Models for multimodal AI applications, combining computer vision with natural language processing.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/VLM Bootcamp Free VLM Bootcamp Certificate _ OpenCV.pdf`,
    category: "computer-vision",
  },
  {
    id: 25,
    title: "PyTorch Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Comprehensive training in PyTorch for deep learning, neural networks, and AI model development.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/PyTorch Bootcamp Free PyTorch Bootcamp Certificate _ OpenCV.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 26,
    title: "TensorFlow-Keras Bootcamp",
    issuer: "OpenCV University",
    date: "May 2026",
    description: "Comprehensive training in TensorFlow and Keras for deep learning, neural networks, and AI model development.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/Tensorflow Free Tensorflow Keras Bootcamp Certificate _ OpenCV.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 27,
    title: "Big Data 101",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive fundamentals of Big Data processing, Hadoop, Spark, and distributed computing systems.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBM BD0101EN Certificate _ Cognitive Class.pdf`,
    category: "data-science",
  },
  {
    id: 28,
    title: "Data Science 101",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive introduction to data science fundamentals, statistical analysis, and machine learning basics.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBM DS0101EN Certificate _ Cognitive Class.pdf`,
    category: "data-science",
  },
  {
    id: 29,
    title: "Prompt Engineering for Everyone",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive training in prompt engineering techniques, best practices, and applications for AI models.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBMSkillsNetwork AI0117EN Certificate _ Cognitive Class.pdf`,
    category: "prompt-engineering",
  },
  {
    id: 30,
    title: "Python 101 for Data Science",
    issuer: "IBM Cognitive Class",
    date: "May 2026",
    description: "Comprehensive introduction to Python programming for data science, including data manipulation, visualization, and analysis.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/IBM PY0101EN Certificate _ Cognitive Class.pdf`,
    category: "data-science",
  },
  {
    id: 31,
    title: "MLOps and Data Pipeline Orchestration for AI Systems",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in MLOps practices, data pipeline orchestration, and AI systems deployment.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_MLOps and Data Pipeline Orchestration for AI Systems.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 32,
    title: "PyTorch Essential Training Deep Learning",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in deep learning using PyTorch, covering neural networks, CNNs, RNNs, and advanced techniques.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_PyTorch Essential Training Deep Learning.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 33,
    title: "Hands-On AI: Computer Vision Projects with Ultralytics and OpenCV",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive hands-on projects in computer vision using Ultralytics YOLO and OpenCV for AI applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_HandsOn AI Computer Vision Projects with Ultralytics and OpenCV.pdf`,
    category: "computer-vision",
  },
  {
    id: 34,
    title: "Deep Learning and Generative AI: Data Prep, Analysis, and Visualization with Python",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Comprehensive training in data preparation, analysis, and visualization for deep learning and generative AI using Python.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Deep Learning and Generative AI Data Prep Analysis and Visualization with Python.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 35,
    title: "Vibe Coding with Lovable: From Idea to Prototype in Under an Hour (No Code Required)",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Learn to rapidly prototype applications using Lovable's no-code platform, transforming ideas into functional prototypes in under an hour.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Vibe Coding with Lovable From Idea to Prototype in Under an Hour No Code Required.pdf`,
    category: "prompt-engineering",
  },
  {
    id: 36,
    title: "Artificial Intelligence Foundations: Machine Learning",
    issuer: "LinkedIn",
    date: "May 2026",
    description: "Comprehensive introduction to artificial intelligence and machine learning fundamentals, covering key concepts, algorithms, and real-world applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Artificial Intelligence Foundations Machine Learning.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 37,
    title: "Data Science Foundations: Fundamentals",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to data science fundamentals, covering essential concepts, methodologies, and tools for data analysis and interpretation.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Data Science Foundations Fundamentals.pdf`,
    category: "data-science",
  },
  {
    id: 38,
    title: "Generative AI: Introduction to Large Language Models",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to Large Language Models (LLMs), covering the fundamentals of generative AI, transformer architecture, training methodologies, and real-world applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Generative AI Introduction to Large Language Models.pdf`,
    category: "agentic-ai-llms",
  },
  {
    id: 39,
    title: "The Non-Technical Skills of Effective Data Scientists",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in essential non-technical skills for data scientists, including communication, collaboration, problem-solving, and business acumen.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_The NonTechnical Skills of Effective Data Scientists.pdf`,
    category: "data-science",
  },
  {
    id: 40,
    title: "Python for Data Visualization",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in data visualization using Python, covering libraries such as Matplotlib, Seaborn, and interactive visualization techniques for effective data storytelling.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Python for Data Visualization.pdf`,
    category: "data-science",
  },
  {
    id: 41,
    title: "Machine Learning with Python: Foundations",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive introduction to machine learning with Python, covering essential libraries like scikit-learn, numpy, and pandas, with hands-on projects and real-world applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine Learning with Python Foundations.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 42,
    title: "Low Code/No-Code Data Literacy with KNIME: From Basic to Advanced",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in low-code/no-code data literacy using KNIME, covering basic to advanced workflows for data integration, transformation, and analysis.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Low CodeNoCode Data Literacy with KNIME From Basic to Advanced.pdf`,
    category: "data-science",
  },
  {
    id: 43,
    title: "Chat with Your Data Using ChatGPT",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in using ChatGPT to interact with and analyze data, enabling natural language querying and insights from datasets.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Chat%20with%20Your%20Data%20Using%20ChatGPT.pdf`,
    category: "prompt-engineering",
  },
  {
    id: 44,
    title: "Machine Learning with Python: Decision Trees",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in decision tree algorithms, covering concepts from splitting criteria to pruning, and their application in classification and regression tasks.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20Decision%20Trees.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 45,
    title: "Data Science Professional Certificate by KNIME",
    issuer: "KNIME",
    date: "May 2026",
    description: "Professional training in data science using KNIME's visual data analytics platform, covering data preprocessing, analysis, and predictive modeling.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Data%20Science%20Professional%20Certificate%20by%20KNIME.pdf`,
    category: "data-science",
  },
  {
    id: 46,
    title: "Machine Learning with Python: Logistic Regression",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in logistic regression for binary and multiclass classification, covering theory, implementation, and evaluation metrics.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20Logistic%20Regression.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 47,
    title: "Machine Learning with Python: kMeans Clustering",
    issuer: "LinkedIn Learning Community",
    date: "May 2026",
    description: "Comprehensive training in k-means clustering algorithm for unsupervised learning, covering centroid initialization, cluster assignment, and evaluation techniques.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Machine%20Learning%20with%20Python%20kMeans%20Clustering.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 101,
    title: "Advance Your Skills in Deep Learning and Neural Networks",
    issuer: "LinkedIn",
    date: "Jun 2026",
    description: "Advanced training in deep learning and neural networks, covering sophisticated architectures, optimization techniques, and real-world AI applications.",
    icon: <Award className="w-6 h-6" />,
    link: `${import.meta.env.BASE_URL}documents/CertificateOfCompletion_Advance_Your_Skills_in_Deep_Learning_and_Neural_Networks.pdf`,
    category: "machine-learning-dl",
  },
  {
    id: 108,
    title: "Advance Your Skills as a Machine Learning Specialist",
    issuer: "LinkedIn",
    date: "Jun 2026",
    credentialId: "efacaf1c460bf5299784a116fd71608a595fdeae9d8cfa459d3bd8ac74ad8d17",
    description: "Professional learning path focused on strengthening practical machine learning expertise, supervised learning skills, and applied ML problem-solving.",
    icon: <Award className="w-6 h-6" />,
    link: "https://www.linkedin.com/learning/certificates/efacaf1c460bf5299784a116fd71608a595fdeae9d8cfa459d3bd8ac74ad8d17/",
    category: "machine-learning-dl",
  },
  {
    id: 109,
    title: "Advance Your Skills in AI and Machine Learning",
    issuer: "LinkedIn",
    date: "Jun 2026",
    credentialId: "2f7a247a803599cd339f507f239afb0e76b37ebfae9153cd894ac5f1c8723d7f",
    description: "Advanced learning path covering artificial intelligence, machine learning, neural networks, and practical techniques for modern AI systems.",
    icon: <Award className="w-6 h-6" />,
    link: "https://www.linkedin.com/learning/certificates/2f7a247a803599cd339f507f239afb0e76b37ebfae9153cd894ac5f1c8723d7f/?trk=share_certificate",
    category: "machine-learning-dl",
  },
  {
    id: 110,
    title: "Machine Learning with Python Professional Certificate by Anaconda",
    issuer: "Anaconda",
    date: "Jun 2026",
    credentialId: "670cf723a2e3113adfb47b5a6acf04902b664d0f0d3ae22d7187a99ea6afdefa",
    description: "Professional certificate in machine learning with Python, covering core ML workflows, model development, evaluation, and practical use of the Python data science ecosystem.",
    icon: <Award className="w-6 h-6" />,
    link: "https://www.linkedin.com/learning/certificates/670cf723a2e3113adfb47b5a6acf04902b664d0f0d3ae22d7187a99ea6afdefa/?trk=share_certificate",
    category: "machine-learning-dl",
  },
  {
    id: 111,
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    date: "May 2026",
    credentialId: "b80361cb9f0a09530b24417d8733ecce79ebb8adaa55a9bcf416342e96063e2e",
    description: "Foundational training in artificial intelligence, covering core AI concepts, terminology, capabilities, and practical applications.",
    icon: <Award className="w-6 h-6" />,
    link: "https://www.linkedin.com/learning/certificates/b80361cb9f0a09530b24417d8733ecce79ebb8adaa55a9bcf416342e96063e2e/?trk=share_certificate",
    category: "machine-learning-dl",
  },
  {
    id: 112,
    title: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2026 · Expires Aug 2028",
    credentialId: "4ED881F3563D305B8064FC31D3992AE57F09F08EBB25565878C4609D1706F328",
    description: "Foundational certification in agentic AI, covering core AI agent concepts, LLM-enabled workflows, and practical foundations for building and using agentic AI solutions with Oracle technologies.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4ED881F3563D305B8064FC31D3992AE57F09F08EBB25565878C4609D1706F328",
    category: "agentic-ai-llms",
  },
  {
    id: 113,
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2026 · Expires Sep 2028",
    credentialId: "7022BC9CA3F2FE2B58B4706AE7646E5212D5D17F87BAA6D5A3E1B137AF38CE50",
    description: "Foundational certification in Oracle AI Database, covering core concepts for AI-enabled database technologies, data management, and AI-oriented database capabilities.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7022BC9CA3F2FE2B58B4706AE7646E5212D5D17F87BAA6D5A3E1B137AF38CE50",
    category: "data-science",
  },
  {
    id: 114,
    title: "Oracle Cloud Infrastructure 2026 Certified Architect Associate",
    issuer: "Oracle",
    date: "Sep 2026 · Expires Sep 2028",
    credentialId: "331188949OCI26CAA",
    description: "Associate-level certification validating cloud architecture skills across Oracle Cloud Infrastructure, including core compute, networking, storage, identity, security, availability, and resilient solution design.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7465F31933EE411B1EB7C5C55C45F6DAD74F72D873EE0DA369F50F835F7F78D6",
    category: "cloud-architecture",
  },
];

const CERTIFICATION_MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Precise ordering for certificates issued in the same month.
// This preserves the real recency order requested for the August 2026 additions.
const certificationRecencyOverrides = {
  114: Date.UTC(2026, 8, 7),
  113: Date.UTC(2026, 8, 1),
  112: Date.UTC(2026, 7, 30),
  102: Date.UTC(2026, 7, 29),
  103: Date.UTC(2026, 7, 28),
  104: Date.UTC(2026, 7, 27),
  105: Date.UTC(2026, 7, 26),
  106: Date.UTC(2026, 7, 25),
  107: Date.UTC(2026, 7, 24),
};

const getCertificationRecency = (cert) => {
  if (certificationRecencyOverrides[cert.id]) {
    return certificationRecencyOverrides[cert.id];
  }

  const issuedDate = cert.date.split("·")[0].trim();
  const monthYear = issuedDate.match(/^([A-Z][a-z]{2})\s+(\d{4})$/);
  if (monthYear && CERTIFICATION_MONTHS[monthYear[1]] !== undefined) {
    return Date.UTC(Number(monthYear[2]), CERTIFICATION_MONTHS[monthYear[1]], 1);
  }

  const yearOnly = issuedDate.match(/^(\d{4})$/);
  if (yearOnly) {
    return Date.UTC(Number(yearOnly[1]), 0, 1);
  }

  return 0;
};

export const certificationsNewestFirst = [...certifications].sort(
  (a, b) => getCertificationRecency(b) - getCertificationRecency(a)
);

const categories = [
  { id: "all", name: "All Certifications" },
  { id: "data-science", name: "Data Science & AI" },
  { id: "cloud-architecture", name: "Cloud & Architecture" },
  { id: "machine-learning-dl", name: "Machine Learning & Deep Learning" },
  { id: "computer-vision", name: "Computer Vision" },
  { id: "agentic-ai-llms", name: "Agentic AI & LLMs" },
  { id: "anthropic", name: "Anthropic" },
  { id: "prompt-engineering", name: "Prompt Engineering" },
];

export const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat.id === 'all') {
      acc[cat.id] = certifications.length;
    } else if (cat.id === 'anthropic') {
      acc[cat.id] = certifications.filter(cert => cert.issuer === 'Anthropic').length;
    } else {
      acc[cat.id] = certifications.filter(cert => cert.category === cat.id).length;
    }
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const normalize = (text) => text.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const normalizedQuery = normalize(searchQuery);
  const filteredCertifications = certificationsNewestFirst.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "anthropic"
        ? cert.issuer === "Anthropic"
        : cert.category === selectedCategory);
    if (normalizedQuery === "") return matchesCategory;
    return (
      matchesCategory &&
      (normalize(cert.title).includes(normalizedQuery) ||
        normalize(cert.description).includes(normalizedQuery) ||
        normalize(cert.issuer).includes(normalizedQuery))
    );
  });

  return (
    <div className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top Bar */}
        <div className="relative flex items-center mb-6">
          {/* Back Button */}
          <Link
            to="/"
            className="absolute left-0 inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back Home
          </Link>

          {/* Search Bar */}
          <div className="flex justify-center w-full">
            <div className="max-w-md animate-fade-in" style={{ animationDelay: '50ms' }}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search certificates by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 md:pl-12 pr-10 md:pr-12 py-2.5 md:py-3 rounded-xl
                           glass border border-border/50
                           text-sm md:text-base bg-transparent placeholder:text-muted-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                           transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            🎓 Certifications
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              certifications.
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            All certifications and training programs that validate my expertise in data science, AI, and engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12 animate-fade-in animation-delay-300">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all relative group ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
              <span className={`absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] bg-primary text-primary-foreground rounded-full transition-opacity duration-300 ${
                selectedCategory === cat.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}>
                {categoryCounts[cat.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
          {filteredCertifications.length > 0 ? (
            filteredCertifications.map((cert, idx) => (
              cert.link ? (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105 block"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                      <CertificationIssuerLogo issuer={cert.issuer} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5 md:space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={cert.id}
                  className="group glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                      <CertificationIssuerLogo issuer={cert.issuer} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5 md:space-y-2">
                      <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 text-center py-12">
              <p className="text-muted-foreground">
                No certifications found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 animate-fade-in animation-delay-500">
          <p className="text-xs md:text-sm text-muted-foreground">
            Continuously learning and expanding my skillset through courses, workshops, and hands-on projects.
          </p>
        </div>
      </div>
    </div>
  );
};