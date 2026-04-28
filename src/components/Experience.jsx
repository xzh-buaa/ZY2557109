import { experienceData } from '../data/content'

export default function Experience() {
  return (
    <section className="section-card">
      <h2 className="section-title">🏢 Work Experience</h2>
      <div className="space-y-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="item-card">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="item-title">{exp.position}</h3>
                <div className="item-meta">
                  <span className="text-gray-700 font-medium">{exp.company}</span>
                  <span className="text-gray-400 mx-2">|</span>
                  <span className="text-gray-500">{exp.location}</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="item-description mt-3">{exp.description}</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
