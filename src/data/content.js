export const sections = [
  { id: 'courses', title: 'Course Work' },
  { id: 'education', title: 'Education' },
  { id: 'papers', title: 'Papers' },
  { id: 'internships', title: 'Internships' },
  { id: 'experience', title: 'Work Experience' },
]

export const courseData = [
  {
    title: 'Advanced Algorithms',
    institution: 'University of Example',
    semester: 'Fall 2023',
    grade: 'A',
    description: 'Studied advanced algorithmic techniques including dynamic programming, graph algorithms, and complexity theory.'
  },
  {
    title: 'Machine Learning',
    institution: 'University of Example',
    semester: 'Spring 2024',
    grade: 'A+',
    description: 'Covered supervised and unsupervised learning, neural networks, and deep learning frameworks.'
  },
  {
    title: 'Database Systems',
    institution: 'University of Example',
    semester: 'Fall 2023',
    grade: 'A',
    description: 'Learned relational database design, SQL optimization, and distributed database systems.'
  }
]

export const educationData = [
  {
    degree: 'Master in Electronic Information',
    institution: 'Beihang University',
    location: 'Beijing, China',
    startDate: 'September 2025',
    endDate: 'June 2028',
    description: 'Research interests: Knowledge Graph Error Detection, Personalized LLM based on Knowledge Graph, LLM Role-playing.'
  },
  {
    degree: 'Bachelor in Electronic Information',
    institution: 'Nanjing University of Posts and Telecommunications',
    location: 'Nanjing, China',
    startDate: 'September 2016',
    endDate: 'June 2020',
    description: 'Relevant courses: Machine Learning & Big Data Processing, Data Mining, Data Structures, Algorithm Design, Communication Principles.'
  }
]

export const paperData = [
  {
    title: 'DREAM: LLM-based Dynamic Role-playing via Event-Aware Memory Graph',
    year: 'SigKDD 2026 Research Track Under Review',
    description: 'Role-playing agents (RPAs) have emerged as a key application of large language models, enabling immersive and high-fidelity character simulation. Accurate role-playing of established characters requires not only stylistic imitation but also temporally consistent and causally grounded behavioral reasoning. However, existing RPAs primarily rely on static character descriptions and unstructured memory, limiting their ability to maintain long-term narrative and personality coherence. We introduce DREAM, a structured memory framework for role-playing agents inspired by the Activating Event–Belief–Consequence (ABC) cognitive model. DREAM transforms unstructured literary text into an Event-aware Memory Graph (EMG) that organizes character experiences into temporally ordered and causally linked event graph. This representation enables the construction of dynamic, dual-granularity character profiles that capture both stable personality traits and event-driven behavioral evolution. We further propose the Temporal Causal Memory (TCM) benchmark to evaluate temporal consistency and long-range causal narrative coherence. DREAM achieves state-of-the-art performance across CoSER, LIFECHOICE, and TCM, outperforming multiple strong baselines. Our approach demonstrates the effectiveness of structured memory in enhancing the interpretability and fidelity of role-playing agents.',
    link: '#',
    images: ['1.png', '2.png']
  }
]

export const repoData = [
  {
    name: 'ml-framework',
    description: 'A lightweight machine learning framework built from scratch',
    language: 'Python',
    stars: 120,
    forks: 25,
    link: 'https://github.com/example/ml-framework'
  },
  {
    name: 'web-scraper',
    description: 'An efficient web scraping tool with proxy support',
    language: 'JavaScript',
    stars: 89,
    forks: 18,
    link: 'https://github.com/example/web-scraper'
  },
  {
    name: 'portfolio-site',
    description: 'Personal portfolio website built with React',
    language: 'TypeScript',
    stars: 45,
    forks: 12,
    link: 'https://github.com/example/portfolio-site'
  }
]

export const internshipData = [
  {
    company: 'Xiaomi AI Lab',
    position: 'LLM Algorithm Intern',
    location: 'Beijing, China',
    startDate: 'September 2025',
    endDate: 'December 2025',
    description: 'Led Step-RL framework for mobile intelligent assistants. Solved sparse reward and action validity issues; boosted task success rate and shortened execution time in e-commerce scenarios.',
    achievements: [
      'Led Step-RL framework for mobile intelligent assistants',
      'Solved sparse reward and action validity issues',
      'Boosted task success rate in e-commerce scenarios'
    ]
  },
  {
    company: 'Beijing Jiliu Technology Co., Ltd.',
    position: 'AI Algorithm Intern',
    location: 'Beijing, China',
    startDate: 'May 2025',
    endDate: 'August 2025',
    description: 'Developed an end-to-end fund ChatBI system. Enhanced intent recognition and designed an Agent pipeline for SQL generation and visualization; improved accuracy and efficiency.',
    achievements: [
      'Developed end-to-end fund ChatBI system',
      'Enhanced intent recognition accuracy',
      'Designed Agent pipeline for SQL generation'
    ]
  },
  {
    company: 'Institute of Basic Medical Sciences, Peking Union Medical College',
    position: 'LLM Algorithm Intern',
    location: 'Beijing, China',
    startDate: 'February 2025',
    endDate: 'May 2025',
    description: 'Built a biomedical intelligent Q&A Agent system using LangGraph and Multi-Agents. Optimized parallel retrieval and caching; reduced latency and hallucation; improved accuracy of intent recognition and Cypher queries.',
    achievements: [
      'Built biomedical intelligent Q&A Agent system using LangGraph',
      'Optimized parallel retrieval and caching',
      'Improved accuracy of intent recognition and Cypher queries'
    ]
  }
]

export const experienceData = [
  {
    company: 'Aptean',
    position: 'Software Development Engineer',
    location: 'China',
    startDate: 'July 2020',
    endDate: 'August 2024',
    description: 'Developed ERP-based e-commerce platforms using SpringBoot, MySQL, Redis. Implemented mall, user, product, and order management modules to improve procurement efficiency.',
    achievements: [
      'Developed ERP-based e-commerce platforms using SpringBoot',
      'Implemented mall, user, product, and order management modules',
      'Improved procurement efficiency through system optimization'
    ]
  }
]
