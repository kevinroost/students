import {studentList} from './data.js';
import { useState } from 'react';
import './App.css';
import Students from './Students.jsx';

function App() {
  const [students, setStudents] = useState(studentList)
  
  return (
    <>
      <Students students={students} />
    </>
  );
}

export default App;
