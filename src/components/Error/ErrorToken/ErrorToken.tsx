import { type FC } from 'react'
import { Link } from 'react-router-dom'

import {
  ErrorTokenDefaultProps,
  ErrorTokenPropTypes,
  type ErrorTokenProps
} from './error'

import './ErrorToken.scss'

export const ErrorToken: FC<ErrorTokenProps> = ({
  title,
  errorNumber,
  redirect,
  text
}) => (
  <div id='notFound'>
    <div className='notFound'>
      <div className='notFound-404'>
        <h1>{errorNumber}</h1>
        <h2>{title}</h2>
      </div>
      <Link to={redirect}>{text}</Link>
    </div>
  </div>
)

ErrorToken.propTypes = ErrorTokenPropTypes
ErrorToken.defaultProps = ErrorTokenDefaultProps
