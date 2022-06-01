export const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    temporaryValue: string,
    randomIndex: number
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
