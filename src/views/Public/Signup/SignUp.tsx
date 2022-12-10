import { FC } from 'react'

import { SignUpDefaultProps, SignUpPropTypes, SignUpProps } from './signup.type'

export const SignUp: FC<SignUpProps> = () => {
    return <h1>SignUp</h1>
}

SignUp.propTypes = SignUpPropTypes
SignUp.defaultProps = SignUpDefaultProps

export default SignUp
