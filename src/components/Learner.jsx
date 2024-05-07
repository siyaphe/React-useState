import React from 'react'

function Learner({data}) {
  return (
    <div className='student'>
      <p>{data.name}</p>
      <p>{data.bio}</p>
    </div>
  )
}

export default Learner
