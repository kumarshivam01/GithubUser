import React,{useState} from 'react'

function GithubSearch({ handleClick }) {
    const [text, setText] = useState("");
  return (
    <div>
        <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => handleClick(text)} > SEARCH </button>
      </div>
    </div>
  )
}

export default GithubSearch