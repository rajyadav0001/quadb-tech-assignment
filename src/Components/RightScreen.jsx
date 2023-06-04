import React from 'react'
// import { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';


const RightScreen = ({movie}) => {
    
    return (
        <div className='rightScreen'>

            <div>
                <h4 className='topHeading'>Movie Summary</h4>
            </div>
            <div>
                <div className='rightContent'>
                    <p className='movieName2'>{ movie.show !== undefined ? movie.show.name : ""}</p>
                    <p className='movieSummary'>{ movie.show !== undefined ? movie.show.summary : ""}</p>     
                    <Link to={movie.show!==undefined ? `movie/${movie.show.id}` : ""}>
                        <button className='bookTicketBtn'>Book ticket</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RightScreen;




