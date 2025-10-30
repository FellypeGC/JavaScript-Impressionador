import React from 'react'

export const Article = ({ text, author, content, textButton, comments }) => {
  return (
    <>
      <h1>{text}</h1> 
      <h4>{author}</h4> 
      <p>{content}</p>
      <button>{textButton}</button>
      <p>{comments}</p>
    </>
  )
}

