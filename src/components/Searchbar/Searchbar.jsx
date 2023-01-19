import { useState } from 'react';

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
    <form action="" onSubmit={handleFormSubmit}>
      <label htmlFor="">
        <input
          type="text"
          value={query}
          onChange={handleIтputChange}
          name="query"
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
