import FormControl from './FormControl'
import { ICategory, IFormData } from './../@types/types'
import categories from '../data/categories'
import styled from 'styled-components'

export default function Form({
  formData,
  handleChange,
}: {
  formData: IFormData
  handleChange: React.ChangeEventHandler<HTMLElement>
}): JSX.Element {
  const getCategoryOptions = () => {
    return (
      <>
        {categories.map((category: ICategory) => {
          return (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          )
        })}
      </>
    )
  }
  return (
    <FormContainer>
      <FormControl
        label="No. of questions"
        formData={formData}
        inputName="numberOfQuestions"
        handleChange={handleChange}
        isInput
        min="5"
        max="50"
      />
      <FormControl
        label="Category"
        formData={formData}
        inputName="category"
        handleChange={handleChange}
      >
        {getCategoryOptions()}
      </FormControl>
      <FormControl
        label="Difficulty"
        formData={formData}
        inputName="difficulty"
        handleChange={handleChange}
      >
        <option value="any">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </FormControl>
      <FormControl
        label="Type of questions"
        formData={formData}
        inputName="typeOfQuestions"
        handleChange={handleChange}
      >
        <option value="any">Any</option>
        <option value="multiple">MCQs</option>
        <option value="boolean">True / False</option>
      </FormControl>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  width: 100%;
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template: auto auto / 40% 40%;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template: auto / auto;
  }
`
