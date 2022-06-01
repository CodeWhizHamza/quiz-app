import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { useState } from 'react'

export default function App() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false)
  const [apiURL, setApiURL] = useState<string>('')
  if (!startQuiz)
    return <Home setStartQuiz={setStartQuiz} setApiURL={setApiURL} />
  return <Quiz apiURL={apiURL} setStartQuiz={setStartQuiz} />
}

