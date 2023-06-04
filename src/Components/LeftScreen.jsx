import '../App.css';

function LeftScreen(props) {

    return (
        <div className="leftScreen">
            <div>
                <h4 className='topHeading1'>Movie List</h4>
            </div>
            <div className='cardContainer'>
                {props.movies.map((movie) => (
                    <div   key={movie.show.id}>
                        <div className='movieCard'>
                            <img className='movieImg'  src={movie.show.image?.medium ? movie.show.image?.medium : "https://m.media-amazon.com/images/M/MV5BYjVjYjUzMTktNGFkMi00ZjhmLWI2MGUtYzVkMzY4NmNkYmY4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"} alt={movie.title} />
                            <div>
                                <h2 className='movieName'>{movie.show.name}<span className='movieLan'>{movie.show.language}</span></h2>
                                <button className='summaryBtn' onClick={()=>{props.setMovie(movie)}}>View Summary</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftScreen;
