import React from 'react'
import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import '../App.css';


const RightScreen = ({movie}) => {
    const { id } = useParams();
    // const [movie, setMovie] = useState({});
    useEffect(() => {
        // fetch(`https://api.tvmaze.com/shows/${id}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setMovie(data);
        //     });
    }, [id]);
    //  console.log(movie);
    return (
        <div className='rightScreen'>

            <div>
                <h4 className='topHeading'>Movie Summary</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                <div className="bg-success p-2 text-dark bg-opacity-10" style={{ marginLeft: "20%", marginRight: "20%", fontSize: "30px", border: "2px solid gray ", padding: "10px", color: "white" }}>
                    {/* <p>{movie.show.name}</p> */}
                    <p>{ movie.show!== undefined ? movie.show.name : ""}</p>
                    <p>{ movie.show!==undefined ? movie.show.summary : ""}</p>
                     
                    {/* <p>{movie?.show.summary}</p> */}
                    <Link to={movie.show!==undefined ? `movie/${movie.show.id}` : ""}>
                        <button className="btn btn-primary btn-lg btn-primary">Book ticket</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RightScreen;




