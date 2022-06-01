import styled from 'styled-components'
import useSWR from 'swr'
import ErrorComp from './../components/ErrorComp'
import {
  IAnswer,
  IAPIResponse,
  IQuestion,
  setStateBoolean,
} from '../@types/types'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import QuestionsList from '../components/QuestionsList'
import { nanoid } from 'nanoid'
import SubmitAnswers from '../components/SubmitAnswers'

export default function Quiz({
  apiURL,
  setStartQuiz,
}: {
  apiURL: string
  setStartQuiz: setStateBoolean
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [questions, setQuestions] = useState<IQuestion[] | null>(null)
  const [correctAnswers, setCorrectAnswers] = useState<IAnswer[]>([])
  const [userAnswers, setUserAnswers] = useState<IAnswer[]>([])
  const [hasCompleted, setHasCompleted] = useState<boolean>(false)
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(
    () => 0,
  )
  const { data, fetcherror }: IAPIResponse = useSWR(apiURL, (url: string) =>
    fetch(url).then((res) => res.json()),
  )
  useEffect(() => {
    if (error) {
      setError(error)
      setIsLoading(false)
    } else if (data) {
      const questionsWithId = data.results.map((question) => ({
        ...question,
        id: nanoid(),
      }))
      setQuestions(questionsWithId)
      setIsLoading(false)
      setCorrectAnswers(
        questionsWithId.map((question) => ({
          value: question.correct_answer,
          id: question.id,
        })),
      )
      setUserAnswers(
        questionsWithId.map((question) => ({
          value: '',
          id: question.id,
        })),
      )
    }
  }, [data, fetcherror])

  const checkAnswers = () => {
    userAnswers.forEach((userAnswer) => {
      correctAnswers.forEach((correctAnswer) => {
        if (
          correctAnswer.id === userAnswer.id &&
          userAnswer.value === correctAnswer.value
        ) {
          setCorrectAnswersCount((prev) => prev + 1)
        }
      })
    })
    setHasCompleted(true)
  }
  const restart = () => {
    setStartQuiz(false)
    setHasCompleted(false)
  }

  if (isLoading)
    return (
      <Main>
        <Loading />
      </Main>
    )
  if (error)
    return (
      <Main>
        <ErrorComp />
      </Main>
    )
  if (!questions) return <></>
  return (
    <Main>
      <QuestionsList
        questions={questions}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
        hasCompleted={hasCompleted}
      />
      {hasCompleted ? (
        <>
          <P>
            You answered {correctAnswersCount}/{userAnswers.length} correctly
            <Button onClick={restart}>Restart</Button>
          </P>
        </>
      ) : (
        <SubmitAnswers checkAnswers={checkAnswers} />
      )}
    </Main>
  )
}
const Main = styled.main`
  max-width: 900px;
  width: 90%;
  margin: 1.5rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
`
const P = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`
const Button = styled.button`
  font-size: 1.2rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-left: 1rem;

  &:hover {
    background: #222;
  }
`
