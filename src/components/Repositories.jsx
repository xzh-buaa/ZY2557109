import { repoData } from '../data/content'

export default function Repositories() {
  return (
    <section className="section-card">
      <h2 className="section-title">💻 GitHub Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repoData.map((repo, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <a href={repo.link} target="_blank" rel="noopener noreferrer" className="item-title text-blue-600 hover:text-blue-800">
                {repo.name}
              </a>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <p className="text-gray-600 text-sm mt-2">{repo.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                <span className="text-sm text-gray-500">{repo.language}</span>
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {repo.stars}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6zm9.5-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 5h2v6h-2zm0-3h2v2h-2z"/>
                </svg>
                {repo.forks}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
