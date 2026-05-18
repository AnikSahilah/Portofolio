import { useEffect, useRef, useState } from 'react'

/**
 * LazySection — renders children only when the section enters the viewport.
 * Shows a skeleton placeholder while loading.
 */
function LazySection({ children, className = '', height = '400px' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing once loaded
        }
      },
      { rootMargin: '200px' } // Start loading 200px before entering viewport
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        children
      ) : (
        <div
          className="flex items-center justify-center"
          style={{ minHeight: height }}
        >
          {/* Skeleton */}
          <div className="w-full max-w-4xl mx-auto space-y-6 animate-pulse px-6">
            <div className="h-4 w-24 rounded-full bg-white/5"></div>
            <div className="h-12 w-3/4 rounded-xl bg-white/5"></div>
            <div className="h-6 w-1/2 rounded-xl bg-white/5"></div>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="h-48 rounded-2xl bg-white/5"></div>
              <div className="h-48 rounded-2xl bg-white/5"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LazySection
