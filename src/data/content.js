export const sections = [
  { id: 'courses', title: 'Coursework', icon: '📚' },
  { id: 'education', title: 'Education', icon: '🎓' },
  { id: 'papers', title: 'Papers', icon: '📝' },
  { id: 'repositories', title: 'GitHub Repos', icon: '💻' },
  { id: 'internships', title: 'Internships', icon: '💼' },
  { id: 'experience', title: 'Work Experience', icon: '🏢' },
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
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Example',
    location: 'New York, USA',
    startDate: 'September 2020',
    endDate: 'May 2024',
    GPA: '3.8/4.0',
    description: 'Relevant coursework: Algorithms, Data Structures, Machine Learning, Operating Systems, Computer Networks'
  }
]

export const paperData = [
  {
    title: 'Deep Learning for Image Recognition',
    authors: ['John Doe', 'Jane Smith', 'Dr. Alice Johnson'],
    conference: 'IEEE Conference on Computer Vision',
    year: '2023',
    description: 'Proposed a novel neural network architecture for efficient image classification with improved accuracy on benchmark datasets.',
    link: '#'
  },
  {
    title: 'Optimizing Cloud Computing Resources',
    authors: ['John Doe', 'Dr. Bob Williams'],
    journal: 'ACM Transactions on Cloud Computing',
    year: '2024',
    description: 'Developed an intelligent resource allocation algorithm that reduces cloud computing costs by 30%.',
    link: '#'
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
    company: 'TechCorp Inc.',
    position: 'Software Engineering Intern',
    location: 'San Francisco, CA',
    startDate: 'June 2023',
    endDate: 'August 2023',
    description: 'Developed and maintained web applications using React and Node.js. Implemented RESTful APIs and optimized database queries.',
    achievements: [
      'Reduced page load time by 40% through code optimization',
      'Collaborated with cross-functional teams to deliver key features',
      'Improved test coverage from 60% to 85%'
    ]
  }
]

export const experienceData = [
  {
    company: 'DataTech Solutions',
    position: 'Software Engineer',
    location: 'Boston, MA',
    startDate: 'June 2024',
    endDate: 'Present',
    description: 'Working on enterprise-level data analytics platform. Responsible for backend development and system architecture.',
    achievements: [
      'Designed and implemented microservices architecture',
      'Led the migration from monolithic to distributed system',
      'Mentored junior developers on best practices'
    ]
  },
  {
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: 'January 2024',
    endDate: 'May 2024',
    description: 'Built scalable web applications for a SaaS startup. Handled both frontend and backend development.',
    achievements: [
      'Launched MVP in 3 months',
      'Implemented real-time features using WebSockets',
      'Optimized database performance for 100K+ users'
    ]
  }
]
