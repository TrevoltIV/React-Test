import './App.css';
import './fonts.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  {/* useState function pass in whatever you want default to be */}
  const [role, setRole] = useState('Developer');

  {/* useState array used for storing employee data to be looped out and displayed */}
  const [employees, setEmployees] = useState([
    {
      name: 'Caleb',
      role: 'Developer',
      img: 'https://m.media-amazon.com/images/M/MV5BZThlOGIwOTQtN2FlMi00NWNjLThhODctZGI0YzliYzY4NDFlXkEyXkFqcGdeQXVyMzM5NDU1ODU@._V1_.jpg'
    },
    {
      name: 'Abby',
      role: 'UI Designer',
      img: 'https://m.media-amazon.com/images/M/MV5BZThlOGIwOTQtN2FlMi00NWNjLThhODctZGI0YzliYzY4NDFlXkEyXkFqcGdeQXVyMzM5NDU1ODU@._V1_.jpg'
    },
    {
      name: 'Marcus',
      role: 'Sr. Developer',
      img: 'https://m.media-amazon.com/images/M/MV5BZThlOGIwOTQtN2FlMi00NWNjLThhODctZGI0YzliYzY4NDFlXkEyXkFqcGdeQXVyMzM5NDU1ODU@._V1_.jpg'
    },
    {
      name: 'John',
      role: 'Marketer',
      img: 'https://m.media-amazon.com/images/M/MV5BZThlOGIwOTQtN2FlMi00NWNjLThhODctZGI0YzliYzY4NDFlXkEyXkFqcGdeQXVyMzM5NDU1ODU@._V1_.jpg'
    },
    {
      name: 'Jacob',
      role: 'Developer',
      img: 'https://m.media-amazon.com/images/M/MV5BZThlOGIwOTQtN2FlMi00NWNjLThhODctZGI0YzliYzY4NDFlXkEyXkFqcGdeQXVyMzM5NDU1ODU@._V1_.jpg'
    },
    {
      name: 'Ashley',
      role: 'Receptionist',
      img: 'https://m.media-amazon.com/images/M/MV5BZThlOGIwOTQtN2FlMi00NWNjLThhODctZGI0YzliYzY4NDFlXkEyXkFqcGdeQXVyMzM5NDU1ODU@._V1_.jpg'
    }
  ]);

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          {/* Display employee list if user is logged in */}
          <input
          type='text'
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <div className="employees">
            {/* map function iterates through the array and you can display the component with each data set from the array */}
            {employees.map((employee) => {
              console.log(employee);
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
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
