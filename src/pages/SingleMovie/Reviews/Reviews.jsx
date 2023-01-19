import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/tmdb.service';

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieID } = useParams();

  useEffect(() => {
    fetchMovieById(movieID, '/reviews').then(reviews =>
      setReviews(reviews.results)
    );
  }, [movieID]);

    if (!reviews) {
      return;
    }

  console.log('reviews', reviews);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h4>{review.author_details.username}</h4>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <div>No reviews</div>
      )}
    </ul>
  );
};
