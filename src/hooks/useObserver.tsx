import { useEffect, useState, useRef } from 'react'

export default function useObserver() {
  const [inIntersecting, setInIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-300px' },
    )
    console.log(inIntersecting)
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [inIntersecting])

  return { inIntersecting, setInIntersecting, ref }
}
