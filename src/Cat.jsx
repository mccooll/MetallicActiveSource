import { Link } from "react-router-dom"

const Cat = ({cat}) => {
    return (
        <div className="catPage">
          <h1>{cat.name}</h1>
          <div><img src={cat.image} /></div>
          <p>{cat.desc}</p>
          <Link to="/">Back to Home</Link>
        </div>
    )
}

export default Cat;