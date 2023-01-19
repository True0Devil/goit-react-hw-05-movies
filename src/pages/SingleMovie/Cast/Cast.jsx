import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/tmdb.service';

export const Cast = () => {
  const [cast, setCast] = useState();
  const { movieID } = useParams();
  // const a = useLocation();

  useEffect(() => {
    fetchMovieById(movieID, '/credits').then(credits => setCast(credits.cast));
  }, [movieID]);

  if (!cast) {
    return;
  }

  const shortenCast = cast.slice(0, 10);

  return (
    <ul>
      {shortenCast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt=""
            width="100"
          />
          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
