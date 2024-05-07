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
          
          </>
          
        ) 
        
      })}

      </div>
    
  );
}

export default App;
