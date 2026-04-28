import { courseData } from '../data/content'

export default function Coursework() {
  return (
    <section className="section-card">
      <h2 className="section-title">📚 Coursework</h2>
      <div className="space-y-4">
        {courseData.map((course, index) => (
          <div key={index} className="item-card">
            <h3 className="item-title">{course.title}</h3>
            <div className="item-meta">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mr-2">
                {course.grade}
              </span>
              <span className="text-gray-500">{course.institution}</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-500">{course.semester}</span>
            </div>
            <p className="item-description">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
