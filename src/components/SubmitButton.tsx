import styled from 'styled-components'

export default function SubmitButton({
  setUrl,
}: {
  setUrl: React.MouseEventHandler<HTMLButtonElement>
}): JSX.Element {
  return (
    <Button type="submit" onClick={setUrl}>
      Start Quiz
    </Button>
  )
}
const Button = styled.button`
  font-size: 1.2rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #222;
  }
`
