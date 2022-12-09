import { ReactElement } from 'react'

export type StepType = { component: ReactElement; key: number; title: string }

export type StepReturnType = {
    next: Function
    previous: Function
    resetSteps: Function
    isFirstStep: boolean
    isLastStep: boolean
    currentStep: number
    content: ReactElement
}
