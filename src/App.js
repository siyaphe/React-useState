import './App.css';
import  {learners}  from './models/learners'; // my data in js
import Learner from './components/Learner';  //function in jsx


function App() {
  return (
    
    <div className="App">
      {learners.map((student)=>{
        return (
          <>
            <Learner data={student}/>
            <div className='btnContainer'>
              <button>Update State</button>
              <button>Add Learner</button>
              <button>Something Else</button>

            </div>
          
          </>
          
        ) 
        
      })}

      </div>
    
  );
}

export default App;
