import React from 'react'
import { useState, useEffect } from 'react'
import GithubApi from './GithubApi';
import GithubCard from './GithubCard'
import GithubErrror from './GithubErrror';
import GithubLoading from './GithubLoading';
import GithubSearch from './GithubSearch';

  function GithubUsers() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("kumarshivam");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    console.log(1);
  
    useEffect(() => {
      setLoading(true);
      GithubApi(query, page)
        .then((res) => {
          setLoading(false);
          setData(res.data);
          setError(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          console.log(err);
        });
      console.log(2);
    }, [query, page]);
  
    const handleClick = (query) => setQuery(query);
    return (
      <div>
        <h2>Github Users</h2>
        {loading && <GithubLoading></GithubLoading>}
        {error && <GithubErrror></GithubErrror>}
        <GithubSearch handleClick={handleClick} />
        {data?.items?.map((item) => (
          <GithubCard key={item.id} {...item} />
        ))}
        <div>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            PREV
          </button>
          <button onClick={() => setPage(page + 1)}>NEXT</button>
        </div>
      </div>
    );
  }


export default GithubUsers