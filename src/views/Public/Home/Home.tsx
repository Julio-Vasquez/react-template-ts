import { FC } from 'react'
import { HomeDefaultProps, HomeProps, HomePropTypes } from './home.types'

export const Home: FC<HomeProps> = () => {
    return <div>Home</div>
}

Home.propTypes = HomePropTypes
Home.defaultProps = HomeDefaultProps

export default Home
