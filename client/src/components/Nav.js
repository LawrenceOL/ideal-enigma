import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="Nav">
      <p>
        <span>Valhalla Land</span>
      </p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Nav
