import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ICategory, IHomeProps, IFormData } from '../@types/types'
import Form from '../components/Form'
import SubmitButton from '../components/SubmitButton'

export default function Home({ setStartQuiz, setApiURL }: IHomeProps) {
  const [formData, setFormData] = useState(() => ({
    numberOfQuestions: 10,
    category: 'any',
    typeOfQuestions: 'any',
    difficulty: 'any',
  }))

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const formDataCopy: IFormData = { ...formData }
    formDataCopy[target.name as keyof typeof formData] = target.value
    setFormData(formDataCopy)
  }
  const setUrl = () => {
    let url = `https://opentdb.com/api.php?amount=${formData.numberOfQuestions}`
    if (formData.category !== 'any') url += `&category=${formData.category}`
    if (formData.typeOfQuestions !== 'any')
      url += `&type=${formData.typeOfQuestions}`
    if (formData.difficulty !== 'any')
      url += `&difficulty=${formData.difficulty}`

    setApiURL(url)
    setStartQuiz(true)
  }

  return (
    <Main>
      <H1>Quizzical</H1>
      <P>Select type of your website, and start your quiz!</P>
      <Form formData={formData} handleChange={handleChange} />
      <SubmitButton setUrl={setUrl} />
    </Main>
  )
}

const Main = styled.main`
  max-width: 900px;
  min-height: 80vh;
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #e9ff99;
  background-image: radial-gradient(
      at 66% 85%,
      hsla(148, 70%, 79%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 18% 38%, hsla(303, 83%, 68%, 1) 0px, transparent 50%),
    radial-gradient(at 6% 55%, hsla(184, 92%, 65%, 1) 0px, transparent 50%),
    radial-gradient(at 10% 0%, hsla(318, 95%, 64%, 1) 0px, transparent 50%),
    radial-gradient(at 64% 8%, hsla(35, 91%, 66%, 1) 0px, transparent 50%),
    radial-gradient(at 15% 11%, hsla(335, 74%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 20% 55%, hsla(176, 74%, 78%, 1) 0px, transparent 50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 0.5rem;
`
const P = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`
