import styled from 'styled-components'

export default function ErrorComp() {
  return (
    <Container>
      <h1>Error Occured.</h1>
      <p>Something went wrong. Please reload the page.</p>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
