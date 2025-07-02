const skillsData = [
  {
    category: "تطوير الواجهة الأمامية",
    icon: "assets/icons/frontend.svg",
    skills: ["HTML", "CSS", "JavaScript", "تصميم متجاوب"]
  },
  {
    category: "تجربة المستخدم والتصميم",
    icon: "assets/icons/Design.svg",
    skills: ["Figma", "Framer", "Webflow", "Canva", "النماذج الأولية", "تصميم الهيكل", "تصميم يركز على المستخدم وسهل الوصول"]
  },
  {
    category: "الذكاء الاصطناعي وعلوم البيانات",
    icon: "assets/icons/AI.svg",
    skills: ["Python", "NumPy", "Pandas", "تعلم الآلة", "التعلم العميق", "معالجة البيانات"]
  },
  {
    category: "الخلفية وقواعد البيانات",
    icon: "assets/icons/Backend.svg",
    skills: ["MySQL", "SQLite"]
  },
  {
    category: "الأدوات والتقنيات",
    icon: "assets/icons/Tools.svg",
    skills: ["Git", "GitHub", "Visual Studio Code", "Google Colab", "Agile & Waterfall Workflows"]
  },
  {
    category: "المهارات الشخصية",
    icon: "assets/icons/Softskills.svg",
    skills: ["العمل الجماعي", "التواصل", "إدارة الوقت", "حل المشكلات", "المرونة", "التفكير القائم على النتائج"]
  }
];

const certificationsData = [
  {
    type: "Certificate",
    icon: "assets/icons/Certificate.svg",
    list: [
      {
        title: "تصميم الويب: من الرسوم التخطيطية إلى النماذج الأولية",
        date: "يونيو ٢٠٢٥",
        issuer: "معهد كالآرتس - كورسيرا",
        description: "تعلمت تصميم المواقع من الرسومات التخطيطية إلى النماذج الأولية الوظيفية.",
        image: "assets/certificates/WebDesignWireframestoPrototypes2025.png"
      },
      {
        title: "العناصر البصرية في تصميم الواجهات",
        date: "مايو ٢٠٢٥",
        issuer: "معهد كالآرتس - كورسيرا",
        description: "تعلمت مبادئ بصرية أساسية لتصميم واجهات سهلة وواضحة للمستخدم.",
        image: "assets/certificates/VisualElementsofUIDesign.png"
      },
      {
        title: "أساسيات تصميم تجربة المستخدم",
        date: "مايو ٢٠٢٥",
        issuer: "معهد كالآرتس - كورسيرا",
        description: "اكتسبت مهارات أولية تساعد في تصميم تجارب استخدام مريحة وسلسة.",
        image: "assets/certificates/UXDesignFundamentals.png"
      },
      {
        title: "مقدمة في الذكاء الاصطناعي",
        date: "أغسطس ٢٠٢٢",
        issuer: "أكاديمية كاوست",
        description: "تعرفت على أساسيات الذكاء الاصطناعي وتطبيقاته.",
        image: "assets/certificates/IntroductiontoArtificialIntelligenceKAUST.png"
      }/*,
      {
        title: "مطور الواجهة الأمامية من Meta",
        date: "2025-07",
        issuer: "Meta - Coursera",
        description: "قمت ببناء مواقع متجاوبة باستخدام HTML وCSS وJavaScript وReact وBootstrap.",
        image: "assets/certificates/ai-python.png"
      }*/
    ]
  },
  {
    type: "Prize",
    icon: "assets/icons/Prize.svg",
    list: [
      {
        title: "المركز الثالث: مسابقة ملصقات علوم الحاسب",
        date: "2024-12",
        issuer: "جامعة الملك عبدالعزيز - كلية الحاسبات",
        description: "حصلت على المركز الثالث في عرض مشروع متجه، وهو نظام ذكاء اصطناعي متعدد الوسائط لتوقع الأسهم.",
        image: "assets/prizes/CS_PosterDay.png"
      }
    ]
  }
];

const projectsData = [
  {
    slug: "muttajeh",
    title: "متجه",
    sector: "الذكاء الاصطناعي",
    shortDescription: "موقع إلكتروني يعتمد على نموذج ذكاء اصطناعي متعدد المصادر للتنبؤ بأسعار الأسهم السعودية باستخدام بيانات السوق المباشرة، والأخبار، والتغريدات، والبيانات التاريخية، مع عرض الرسوم البيانية الذكية.",
    fullDescription: "متجه هو منصة ذكية لتوقع الأسهم تهدف إلى مساعدة المستثمرين السعوديين. تستخدم نماذج ذكاء اصطناعي تجمع بين بيانات السوق الفعلية، وتحليل مشاعر الأخبار، والاتجاهات التاريخية لتوقع الأسعار المستقبلية. يدمج المشروع واجهات برمجة التطبيقات الإخبارية، وتحليل تويتر، وبيانات سهم باستخدام نموذج تحويل مدمج.",
    technologies: ["Python", "FastAPI", "HTML", "CSS", "JavaScript", "Transformer", "Pandas", "Saham API", "News API"],
    features: [
      "واجهة متعددة اللغات (عربي/إنجليزي)",
      "عرض بيانات السوق الفعلية مباشرة",
      "توصيات للشراء والبيع",
      "توقعات ذكية للأسهم لمدة 30 يومًا",
      "تقارير قابلة للتنزيل وتنبيهات للأسعار",
      "روبوت دردشة مدمج لمساعدة المستخدم"
    ],
    github: "https://github.com/yourusername/muttajeh",
    demo: "", 
    image: "assets/projects/Muttajeh.png",
    date: "2024-12",
    role: "قائد الفريق ومطور الذكاء الاصطناعي",
    pdf: "assets/pdfs/ProjectSoon_Ar.pdf"
  },
  {
    slug: "portfolio",
    title: "موقعي الشخصي",
    sector: "تطوير المواقع",
    shortDescription: "موقع إلكتروني ثنائي اللغة بتنسيق داكن/فاتح، يعرض مهاراتي، شهاداتي، ومشاريعي بتصميم أنيق وسهل الاستخدام، تم تطويره باستخدام HTML وCSS وJavaScript مع التركيز على تجربة المستخدم والتفاعل السلس.",
    fullDescription: "تم تصميمه لعرض المهارات والشهادات والمشاريع بطريقة تفاعلية. يحتوي الموقع على أقسام ديناميكية بلغة JavaScript، مع تبديل اللغة (عربي/إنجليزي) وتبديل بين الوضع المظلم والفاتح، مع الحفاظ على مبادئ التصميم المتجاوب وسهولة الوصول.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "SVG", "تصميم متجاوب"],
    features: [
      "تبديل بين الوضع الفاتح والمظلم",
      "تحميل المهارات والشهادات بشكل ديناميكي",
      "تبديل اللغة (إنجليزي/عربي)",
      "تصميم متجاوب يبدأ من الجوال",
      "تصميم يسهل الوصول إليه (لوحة المفاتيح وقارئ الشاشة)"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "assets/projects/Portfolio.png",
    date: "2025-06",
    role: "مصمم ومطور الواجهة الكاملة",
    pdf: "assets/pdfs/ProjectSoon_Ar.pdf"
  },
  {
    slug: "FloraWise",
    title: "فلورا وايز",
    sector: "تطوير المواقع",
    shortDescription: "مشروع جماعي ضمن مقرر دراسي: منصة إلكترونية لمحبي النباتات، تسمح بتصفح أنواع الأزهار، ومعرفة معلومات العناية بها، والتعرّف على النبات من خلال صورة باستخدام واجهة ذكاء اصطناعي، بالإضافة إلى نموذج بسيط لتقديم الملاحظات.",
    fullDescription: "منصة مصممة لعرض المهارات والشهادات والمشاريع بطريقة تفاعلية. تتضمن أقسام ديناميكية باستخدام JavaScript، مع إمكانية التبديل بين اللغة الإنجليزية والعربية، وتبديل الأوضاع بين الفاتح والداكن، مع الحفاظ على مبادئ التصميم المتجاوب وسهولة الوصول.",
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
    role: "مصمم ومطور الواجهة الأمامية",
    pdf: "assets/pdfs/ProjectSoon_Ar.pdf"
  }
];
