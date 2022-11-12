import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  {/* useState function pass in whatever you want default to be */}
  const [role, setRole] = useState('Developer');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          {/* Display employee list if user is logged in */}
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <Employee name="Caleb" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <>
          {/* Display message if user is not logged in */}
          <p>You cannot see the employee list</p>
        </>
      )}
      <button className="showEmployeesBtn">Click</button>
      </div>
  );
}

export default App;
