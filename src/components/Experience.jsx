import { experienceData } from '../data/content'

export default function Experience() {
  return (
    <section className="section-card">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="item-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="item-title">{exp.position}</h3>
                <div className="item-meta">
                  <span className="text-gray-700 font-medium">{exp.company}</span>
                  <span className="text-gray-300 mx-2">|</span>
                  <span className="text-gray-500">{exp.location}</span>
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="item-description">{exp.description}</p>
            <div className="mt-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Achievements</p>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-gray-300">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
