import React from 'react'
import axios from 'axios'
function GithubApi(q = "albseb511", page = 1) {
  
    return axios("https://api.github.com/search/users", {
      method: "GET",
      params: {
        q,
        per_page: 5,
        page
      }
    });
  
}

export default GithubApi