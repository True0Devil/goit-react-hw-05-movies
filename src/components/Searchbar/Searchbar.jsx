import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleIтputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form
      action=""
      onSubmit={handleFormSubmit}
      className="mb-5 ms-2"
    >
      <label htmlFor="" className="w-25 me-2">
        <input
          type="text"
          value={query}
          onChange={handleIтputChange}
          name="query"
          className="form-control"
        />
      </label>

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}