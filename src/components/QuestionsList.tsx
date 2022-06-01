import styled from 'styled-components'
import { IAnswer, IQuestion } from '../@types/types'
import Question from './Question'

export default function QuestionsList({
  questions,
  userAnswers,
  setUserAnswers,
  hasCompleted,
}: {
  questions: IQuestion[]
  userAnswers: IAnswer[]
  setUserAnswers: React.Dispatch<React.SetStateAction<IAnswer[]>>
  hasCompleted: boolean
}) {
  return (
    <>
      {questions.map((question) => (
        <Question
          hasCompleted={hasCompleted}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          key={question.id}
          question={question}
        />
      ))}
    </>
  )
}

const H1 = styled.h1`
  font-size: 3 rem;
  color: #333;
  margin-bottom: 2rem;
`
