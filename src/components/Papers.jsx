import { paperData } from '../data/content'

export default function Papers() {
  return (
    <section className="section-card">
      <h2 className="section-title">📝 Papers</h2>
      <div className="space-y-4">
        {paperData.map((paper, index) => (
          <div key={index} className="item-card">
            <div className="flex items-start justify-between">
              <h3 className="item-title">{paper.title}</h3>
              <a href={paper.link} className="text-blue-500 hover:text-blue-700 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {paper.authors.join(', ')}
            </p>
            <div className="item-meta">
              <span className="text-gray-500">{paper.conference || paper.journal}</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-500">{paper.year}</span>
            </div>
            <p className="item-description">{paper.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
