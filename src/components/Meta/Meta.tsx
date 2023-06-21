import { type FC } from 'react'
import propTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

interface MetaProps {
  title: string
  description: string
  keywords: string[]
}

const Meta: FC<MetaProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} data-rh='true' />
      <meta name='keywords' content={keywords.join(', ')} data-rh='true' />
    </Helmet>
  )
}

Meta.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  keywords: propTypes.arrayOf(propTypes.string.isRequired).isRequired
}

export default Meta
