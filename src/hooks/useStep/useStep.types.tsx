import { type ReactElement } from 'react'

export interface StepType {
  component: ReactElement
  key: number
  title: string
}

export interface StepReturnType {
  next: Function
  previous: Function
  resetSteps: Function
  isFirstStep: boolean
  isLastStep: boolean
  currentStep: number
  content: ReactElement
}
