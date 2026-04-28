import { educationData } from '../data/content'

export default function Education() {
  return (
    <section className="section-card">
      <h2 className="section-title">🎓 Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="item-card">
            <h3 className="item-title">{edu.degree}</h3>
            <div className="item-meta">
              <span className="text-gray-700 font-medium">{edu.institution}</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-500">{edu.location}</span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span>{edu.startDate} - {edu.endDate}</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                GPA: {edu.GPA}
              </span>
            </div>
            <p className="item-description mt-3">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
