import { useState } from 'react'

import { type StepReturnType, type StepType } from './useStep.types'

export const useStep = (steps: StepType[]): StepReturnType => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const isLastStep = currentStep === steps.length - 1

  const isFirstStep = currentStep === 0

  const next = () => {
    setCurrentStep(current => (!isLastStep ? current + 1 : current))
  }

  const previous = () => {
    setCurrentStep(current => (!isFirstStep ? current - 1 : current))
  }

  const resetSteps = () => {
    setCurrentStep(0)
  }

  return {
    next,
    previous,
    resetSteps,
    isFirstStep,
    isLastStep,
    currentStep,
    content: steps[currentStep].component
  }
}

export default useStep
