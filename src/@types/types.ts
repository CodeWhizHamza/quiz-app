export type setStateBoolean = React.Dispatch<React.SetStateAction<boolean>>
export type setStateString = React.Dispatch<React.SetStateAction<string>>

export interface ICategory {
  value: string
  label: string
}
export interface IHomeProps {
  setStartQuiz: setStateBoolean
  setApiURL: setStateString
}
export interface IFormData {
  numberOfQuestions: number
  category: string
  typeOfQuestions: string
  difficulty: string
}
export interface IQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  id?: string
}
export interface IAPIResponse {
  fetcherror?: Error | null
  data?: { response_code: number; results: IQuestion[] }
}
export interface IAnswer {
  value: string
  id: string
}
