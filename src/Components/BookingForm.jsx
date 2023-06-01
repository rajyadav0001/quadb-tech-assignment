import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = { name, email, phone, movieName: movie.name };
    localStorage.setItem('booking', JSON.stringify(booking));
    alert("Booking Successful")
    navigate('/');
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4>Movie Booking Form</h4>
            </div>
            <div className="card-body">
              <h2>{movie.name}</h2>
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-sm" >Book Ticket</button>
              </form>

            </div>

          </div>
          <br></br>
          <Link to="/"><button className="btn btn-primary btn-sm btn-primary">Back To Movie List</button></Link>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
