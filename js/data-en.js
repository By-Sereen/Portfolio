const skillsData = [
  {
    category: "Front-End Development",
    icon: "assets/icons/frontend.svg",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    category: "UI/UX & Design",
    icon: "assets/icons/Design.svg",
    skills: ["Figma","Framer","Webflow","Canva", "Prototyping", "Wireframing","User-Centered & Accessible Design"]
  },
  {
    category: "AI & Data Science",
    icon: "assets/icons/AI.svg",
    skills: ["Python", "NumPy", "Pandas", "Machine Learning", "Deep Learning", "Data Preprocessing"]
  },
  {
    category: "Back-End & Databases",
    icon: "assets/icons/Backend.svg",
    skills: ["MySQL", "SQLite"]
  },
  {
    category: "Tools & Technologies",
    icon: "assets/icons/Tools.svg",
    skills: ["Git", "GitHub", "Visual Studio Code", "Google Colab", "Agile & Waterfall Workflows"]
  },
  {
    category: "Soft Skills",
    icon: "assets/icons/Softskills.svg",
    skills: ["Collaboration", "Communication", "Time Management", "Problem Solving", "Adaptability", "Results-Oriented Thinking"]
  }
];

const certificationsData = [
  {
    type: "Certificate",
    icon: "assets/icons/Certificate.svg",
    list: [
      {
        title: "Web Design: Wireframes to Prototypes",
        date: "2025-06",
        issuer: "Calarts - Coursera",
        description: "Learned to design websites from wireframes to functional prototypes.",
        image: "assets/certificates/WebDesignWireframestoPrototypes2025.png"
      },
      {
        title: "Visual Elements of UI Design",
        date: "2025-05",
        issuer: "Calarts - Coursera",
        description: "Explored key visual principles to create user-friendly interface designs.",
        image: "assets/certificates/VisualElementsofUIDesign.png"
      },
      {
        title: "UX Design Fundamentals",
        date: "2025-05",
        issuer: "Calarts - Coursera",
        description: "Gained foundational skills for creating intuitive, user-centered designs.",
        image: "assets/certificates/UXDesignFundamentals.png"
      },
      {
        title: "Introduction to Artificial Intelligence Course",
        date: "2022-08",
        issuer: "KAUST",
        description: "Introduced to the fundamentals of Artificial Intelligence and its applications.",
        image: "assets/certificates/IntroductiontoArtificialIntelligenceKAUST.png"
      }/*,
      {
        title: "Meta Front-End Developer",
        date: "2025-07",
        issuer: "Meta - Coursera",
        description: "Built responsive websites using HTML, CSS, JavaScript, React, and Bootstrap.",
        image: "assets/certificates/ai-python.png"
      }*/
    ]
  },
  {
    type: "Prize",
    icon: "assets/icons/Prize.svg",
    list: [
      {
        title: "Won 3rd Place: CS Poster Day Competition",
        date: "2024-12",
        issuer: "KAU - FCIT",
        description: "Won 3rd place for presenting Muttajeh, an AI multimodal system for stock prediction.",
        image: "assets/prizes/CS_PosterDay.png"
      }
    ]
  }
];

const projectsData = [
  {
    slug: "muttajeh",
    title: "Muttajeh",
    sector: "Artificial Intelligence",
    shortDescription: "Group senior project, A web platform using multimodal AI to predict Saudi stock prices by analyzing real-time market data, news, tweets, and historical trends, featuring smart charts.",
    fullDescription: "Muttajeh is a smart stock prediction platform designed to assist Saudi investors. It uses AI models that combine real-time market data, news ans tweets sentiment analysis, and historical trends to predict future stock prices. The project integrates News APIs, Twitter sentiment, and Saham market data using a fusion model.",
    technologies: ["Python", "FastAPI", "HTML", "CSS", "JavaScript", "LSTM", "Pandas", "Saham API", "News API"],
    features: [
      "Multilingual interface (Arabic/English)",
      "Real-time data visualization",
      "Buy/Sell signal recommendations",
      "AI-powered stock prediction for 30 days",
      "Downloadable reports and price alerts",
      "Integrated chatbot for user guidance"
    ],
    github: "https://github.com/yourusername/muttajeh",
    demo: "", 
    image: "assets/projects/Muttajeh.png",
    date: "2024-12",
    role: "Team Lead & AI Developer",
    pdf: "assets/pdfs/ProjectSoon_En.pdf",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    sector: "Website Development",
    shortDescription: "A bilingual website with dark/light themes showcasing my skills, certificates, and projects with a clean design, developed using HTML, CSS, and JavaScript.",
    fullDescription: "Built to showcase skills, certifications, and projects interactively. This website includes dynamic JavaScript-driven sections, language toggles (EN/AR), and theme switching, while maintaining accessibility and responsive UI design principles.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Responsive Design"],
    features: [
      "Dark/Light mode toggle",
      "Dynamic skills and certifications loading",
      "Language toggle (English/Arabic)",
      "Mobile-first responsive layout",
      "Accessible design (keyboard & screen-reader friendly)"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "assets/projects/Portfolio.png",
    date: "2025-06",
    role: "Full-stack Designer & Developer",
    pdf: "assets/pdfs/ProjectSoon_En.pdf"
  },
  {
    slug: "FloraWise",
    title: "FloraWise",
    sector: "Website Development",
    shortDescription: "A group course project, a web-based platform for plant lovers to explore flowers, view care tags, recognize plants using an AI image API, and submit feedback through a simple form.",
    fullDescription: "Built to showcase skills, certifications, and projects interactively. This website includes dynamic JavaScript-driven sections, language toggles (EN/AR), and theme switching, while maintaining accessibility and responsive UI design principles.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    features: [
      "Dark/Light mode toggle",
      "Dynamic skills and certifications loading",
      "Language toggle (English/Arabic)",
      "Mobile-first responsive layout",
      "Accessible design (keyboard & screen-reader friendly)"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "assets/projects/FloraWise.png",
    date: "2025-06",
    role: "Frontend Designer & Developer",
    pdf: "assets/pdfs/ProjectSoon_En.pdf"
  }
];
