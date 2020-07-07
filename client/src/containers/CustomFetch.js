import React, { useState } from 'react';
import useCustomFetch from '../hooks/useCustomFetch';

export const CustomFetch = () => {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  const getFollowers = (event) => {
    if (event.key === 'Enter') {
      setUrl('https://api.github.com/users/' + event.target.value);
    }
  };

  return (
    <div>
      <h2>Git ID:</h2>
      <input onKeyPress={getFollowers}></input>
      <h2>Response:</h2>
      {loading && url && <div>Loading ...</div>}

      {!loading && data && data.rData && data.rData.followers && (
        <div>Followers: {data.rData.followers}</div>
      )}
      {error && <div>Error: {error} </div>}
    </div>
  );
};

export default CustomFetch;
