import styled from 'styled-components'
import { IFormData } from '../@types/types'

export default function FormControl({
  inputName,
  handleChange,
  formData,
  isInput,
  min,
  max,
  label,
  children,
}: {
  inputName: string
  handleChange: React.ChangeEventHandler<HTMLElement>
  formData: IFormData
  isInput?: boolean
  min?: string
  max?: string
  label: string
  children?: React.ReactNode
}) {
  return (
    <Contanier>
      <Label htmlFor={inputName}>{label}</Label>
      {isInput ? (
        <Input
          type="number"
          id={inputName}
          name={inputName}
          value={formData[inputName as keyof typeof formData]}
          onChange={handleChange}
          min={min}
          max={max}
        />
      ) : (
        <Select
          id={inputName}
          name={inputName}
          value={formData[inputName as keyof typeof formData]}
          onChange={handleChange}
        >
          {children}
        </Select>
      )}
    </Contanier>
  )
}
const Contanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`
const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 0.25rem;
`
const styles = `
  display: block;
  width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid silver;
    border-radius: 0.25rem;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px rgb(29, 32, 35);
    }
`
const Input = styled.input`
  ${styles}
`
const Select = styled.select`
  ${styles}
`
