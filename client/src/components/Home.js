import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <div className="paragraph">
        <p>
          Welcome great warriors. Venture forth into the land of Valhalla!
          Adventure, danger, and ancient magic await behind the gates
        </p>
        <Link to="/form">
          <button>Tokens Available Here</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
