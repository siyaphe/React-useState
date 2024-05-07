import React from 'react';
import Score from './Score';

function Learner({data}) {
  return (
    <div className='student'>
      <p>{data.name}</p>
      <p>{data.bio}</p>

      <div className='scoreContainer'>
        {data.scores.map((score)=>{
          return <Score grade={score}/>;
        } ) }
        
      </div>
    </div>
  );
}

export default Learner
