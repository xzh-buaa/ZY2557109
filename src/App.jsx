import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Coursework from './components/Coursework'
import Education from './components/Education'
import Papers from './components/Papers'
import Repositories from './components/Repositories'
import Internships from './components/Internships'
import Experience from './components/Experience'

const sectionComponents = {
  courses: Coursework,
  education: Education,
  papers: Papers,
  repositories: Repositories,
  internships: Internships,
  experience: Experience,
}

export default function App() {
  const [activeSection, setActiveSection] = useState('courses')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionOffsets = {
        courses: document.getElementById('courses')?.offsetTop || 0,
        education: document.getElementById('education')?.offsetTop || 0,
        papers: document.getElementById('papers')?.offsetTop || 0,
        repositories: document.getElementById('repositories')?.offsetTop || 0,
        internships: document.getElementById('internships')?.offsetTop || 0,
        experience: document.getElementById('experience')?.offsetTop || 0,
      }

      const currentSection = Object.keys(sectionOffsets).find((section) => {
        const nextSection = Object.keys(sectionOffsets)[
          Object.keys(sectionOffsets).indexOf(section) + 1
        ]
        if (nextSection) {
          return (
            scrollPosition >= sectionOffsets[section] &&
            scrollPosition < sectionOffsets[nextSection] - 100
          )
        }
        return scrollPosition >= sectionOffsets[section]
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const handleSidebarClick = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={handleSidebarClick} />
      <main className="ml-64 min-h-screen p-8">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">John Doe</h1>
            <p className="text-gray-600 text-lg">Software Engineer | Computer Science Enthusiast</p>
            <p className="text-gray-500 mt-2">Welcome to my personal blog. Here you'll find information about my academic projects, work experience, and technical interests.</p>
          </header>

          <div className="space-y-8">
            {Object.entries(sectionComponents).map(([id, Component]) => (
              <div key={id} id={id}>
                <Component />
              </div>
            ))}
          </div>

          <footer className="mt-16 text-center text-gray-500 text-sm">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
