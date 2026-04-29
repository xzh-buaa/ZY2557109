import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Coursework from './components/Coursework'
import Education from './components/Education'
import Papers from './components/Papers'
import Internships from './components/Internships'
import Experience from './components/Experience'

const sectionComponents = {
  courses: Coursework,
  education: Education,
  papers: Papers,
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
    <div className="min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={handleSidebarClick} />
      <main className="ml-72 min-h-screen p-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {Object.entries(sectionComponents).map(([id, Component]) => (
              <div key={id} id={id} className="animate-fade-in">
                <Component />
              </div>
            ))}
          </div>

          <footer className="mt-20 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2026 Xiao Zhihao. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
