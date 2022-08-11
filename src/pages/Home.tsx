import {Link} from 'react-router-dom'
import './Pages.css'

export const Home = (): JSX.Element => {
  return (
    <div className='main'>
      <header className="header">
        <Link to="/event">События</Link>
      </header>
    </div>
  )
}
