import React from 'react'
import { movies } from './data.js'
const Movie = () => {
  const [movieList, setMovieList] = React.useState(movies);
  const filterMovies = (cat) => {
    setMovieList(movies.filter((data)=>  data.category==cat))
  }
  return (
    <>


      <div className="d-flex justify-content-center flex-wrap my-3">

        <button type="button" onClick={()=>setMovieList(movies)} class="btn btn-outline-primary mx-4">All Movies</button>
        <button type="button" onClick={()=>filterMovies("Action")} class="btn btn-outline-secondary mx-4">Action Movies</button>
        <button type="button" onClick={()=>filterMovies("Thriller")} class="btn btn-outline-success mx-4">Thriller</button>
        <button type="button" onClick={()=>filterMovies("Animation")} class="btn btn-outline-danger mx-4">Animation</button>
        <button type="button" onClick={()=>filterMovies("Sci-Fi")} class="btn btn-outline-warning mx-4">Sci-Fi</button>
        <button type="button" onClick={()=>filterMovies("Horror")} class="btn btn-outline-secondary mx-4">Horor</button>
        <button type="button" onClick={()=>filterMovies("Drama")} class="btn btn-outline-light mx-4">Drama</button>
        <button type="button" onClick={()=>filterMovies("Anime")} class="btn btn-outline-danger mx-4">Anime</button>

      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1200px',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '60px',
      }}>

        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: '300px', textAlign: 'center' }}>
            <div style={{ padding: '10px' }} className='hover_effect'>
              <img src={data.poster_path} alt='image' style={{ width: '220px', height: '300px', borderRadius: '10px', border: '1px solid cyan' }} />
          
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default Movie;