'use client'

import { useState } from 'react'

interface DuvidasProps {
  question: string
  answer: string
}

export default function Duvida({ question, answer }: DuvidasProps) {
  const [hide, setHide] = useState<boolean>(false)

  function getAnswer() {
    setHide(!hide)
  }

  return (
    <div className="pb-6">
      <h2
        onClick={getAnswer}
        className="font-[500] delay-500 pb-2 hover:cursor-pointer"
      >
        {question}
      </h2>
      <p className={`${hide ? 'block' : 'hidden'} pb-2`}>{answer}</p>
      <hr />
    </div>
  )
}
