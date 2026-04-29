import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'

export default function Coursework() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/assignment1.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading markdown:', error))
  }, [])

  return (
    <section className="section-card">
      <h2 className="section-title">Course Work</h2>
      <div className="prose prose-slate max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            h1: ({ ...props }) => <h1 className="text-2xl font-bold mt-8 mb-4" {...props} />,
            h2: ({ ...props }) => <h2 className="text-xl font-semibold mt-6 mb-3" {...props} />,
            h3: ({ ...props }) => <h3 className="text-lg font-medium mt-4 mb-2" {...props} />,
            p: ({ ...props }) => <p className="my-3 text-gray-700" {...props} />,
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return (
                <code
                  className={`${className || ''} font-mono`}
                  {...props}
                >
                  {children}
                </code>
              )
            },
            pre: ({ ...props }) => (
              <pre className="!bg-[#282c34] p-5 rounded-xl overflow-x-auto text-sm my-4 !m-0 shadow-lg">
                {props.children}
              </pre>
            ),
            ul: ({ ...props }) => <ul className="list-disc pl-6 my-3 space-y-1" {...props} />,
            ol: ({ ...props }) => <ol className="list-decimal pl-6 my-3 space-y-1" {...props} />,
            li: ({ ...props }) => <li className="text-gray-700" {...props} />,
            strong: ({ ...props }) => <strong className="font-semibold text-gray-800" {...props} />,
            a: ({ ...props }) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
            blockquote: ({ ...props }) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 py-1 my-4 text-gray-600 italic" {...props} />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  )
}
