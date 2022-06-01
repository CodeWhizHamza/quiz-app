import { IAnswer, IQuestion } from '../@types/types'
import styled from 'styled-components'
import { shuffle } from '../utils/func'
import { useEffect, useState } from 'react'

export default function Question({
  question,
  userAnswers,
  setUserAnswers,
  hasCompleted,
}: {
  question: IQuestion
  userAnswers: IAnswer[]
  setUserAnswers: React.Dispatch<React.SetStateAction<IAnswer[]>>
  hasCompleted: boolean
}) {
  const [answers, setAnswers] = useState<string[]>([])
  const { question: questionText, correct_answer, incorrect_answers } = question
  useEffect(() => {
    setAnswers(shuffle([correct_answer, ...incorrect_answers]))
  }, [])

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const userAnswersCopy = [...userAnswers]
    setUserAnswers(
      userAnswersCopy.map((answer) => {
        if (answer.id === target.name) answer.value = target.value
        return answer
      }),
    )
  }

  return (
    <Container>
      <QuestionText dangerouslySetInnerHTML={{ __html: `${questionText}` }} />
      <Answers>
        {answers.map((answer: string) => (
          <Answer key={answer}>
            <Input
              type="radio"
              id={answer + question.id}
              name={question.id}
              onChange={handleChange}
              value={answer}
              disabled={hasCompleted}
              isCorrect={hasCompleted && answer === question.correct_answer}
              checked={
                userAnswers.find((ans) => ans.id === question.id)?.value ===
                answer
              }
            />
            <Label
              htmlFor={answer + question.id}
              dangerouslySetInnerHTML={{ __html: `${answer}` }}
            ></Label>
          </Answer>
        ))}
      </Answers>
    </Container>
  )
}
/**
 *
 */
const Container = styled.article`
  padding: 1rem;
  margin: 1rem 0;
  border-bottom: 2px solid rgba(90, 90, 90, 0.3);
  border-radius: 0.25rem;
  display: grid;
  gap: 1rem 0;
`
const QuestionText = styled.p`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
`
const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
const Answer = styled.div`
  width: auto;
  position: relative;
  overflow: hidden;
`
interface InputProps {
  readonly isCorrect: boolean
}
const Input = styled.input<InputProps>`
  opacity: 0;
  position: absolute;

  &:checked + label {
    background: #3498db;
    color: #fff;
  }
  ${(props) => {
    if (props.isCorrect)
      return `
        & + label {
          background: #2ecc71 !important;
          color: #fff;
        }
      `
    else if (props.checked && !props.isCorrect && props.disabled)
      return `
        & + label {
          background: #e74c3c !important;
          color: #fff;
        }
    `
  }}
`
const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  background: #fff;
  border: 1px solid #aaa;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
`
