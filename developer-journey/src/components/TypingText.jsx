import { useEffect, useState } from 'react'

function TypingText() {
  const texts = [
    'Fullstack Web Developer',
    'Laravel & React Enthusiast',
    'Building Scalable Web Applications',
    'Crafting Modern Interactive UI',
  ]

  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + texts[textIndex][charIndex])
        setCharIndex(prev => prev + 1)
      }, 80)

      return () => clearTimeout(timeout)
    }

    const nextTextTimeout = setTimeout(() => {
      setCurrentText('')
      setCharIndex(0)
      setTextIndex(prev => (prev + 1) % texts.length)
    }, 2000)

    return () => clearTimeout(nextTextTimeout)
  }, [charIndex, textIndex])

  return (
    <div className="text-green-400 text-lg md:text-xl font-mono mt-4">
      <span>$ </span>
      <span>{currentText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}

export default TypingText