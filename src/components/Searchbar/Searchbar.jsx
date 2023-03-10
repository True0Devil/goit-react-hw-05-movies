import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [isFirstRender, setFirstRender] = useState(true);
  const [searchParam] = useSearchParams();

  useEffect(() => {
    if (!isFirstRender) {
      return;
    }
    const param = searchParam.get('search');
    param && setQuery(param);
    setFirstRender(false);
  }, [searchParam, isFirstRender]);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (searchParam.get('search') === query) return;
    onSubmit(query);
    setQuery('');
  };

  return (
    <form action="" onSubmit={handleFormSubmit} className="mb-5 ms-2">
      <label htmlFor="" className="w-25 me-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
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
};
