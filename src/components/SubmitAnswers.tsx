import styled from 'styled-components'

export default function SubmitAnswers({
  checkAnswers,
}: {
  checkAnswers: React.MouseEventHandler
}) {
  return <Button onClick={checkAnswers}>Check Answers</Button>
}
const Button = styled.button`
  font-size: 1.2rem;
  border: none;
  display: block;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #222;
  }
`
