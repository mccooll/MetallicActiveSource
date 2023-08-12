import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default ({cats}) => {
    const { catId } = useParams();
    console.log(cats)
    const cat = cats.find(c => c.id === catId);

    return (
        <div className="catPage">
          <h1>{cat.name}</h1>
          <div><img src={cat.image} /></div>
          <p>{cat.desc}</p>
          <Link to="/">Back to Home</Link>
        </div>
    )
}
