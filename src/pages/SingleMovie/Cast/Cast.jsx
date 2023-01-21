import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieById } from 'services/tmdb.service';
import image from '../../../images/imageNotFound.jpg';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieID } = useParams();

  useEffect(() => {
    fetchMovieById(movieID, '/credits').then(credits => setCast(credits.cast));
  }, [movieID]);

  if (!cast) {
    return;
  }

  const shortenCast = cast.slice(0, 10);

  return (
    <ul className="d-flex p-0">
      {shortenCast.map(actor => (
        <li
          key={actor.id}
          className="list-group-item  w-25 d-flex flex-column align-items-center"
        >
          <img            
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : image
            }
            alt=""
            width="100"
            className="mb-2"
          />
          <h5>{actor.name}</h5>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
