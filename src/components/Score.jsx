import React from 'react'

function Score({grade}) {
  return (
    <div className='score'>
      <div> {grade.score >= 85 ? (
        <>
        <div style={{color:'green'}}>Score: {grade.score}</div>
        </>
      ) : (
        <>
        <div style={{color:'red'}}>Score: {grade.score}</div>
        </>
      )
      }</div>
      <hr/>
      <div style={{fontSize:'11px'}}>Date: {grade.date}</div> 
    </div>
  )
}

export default Score