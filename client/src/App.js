import React from 'react';
import './App.css';
import FormikUserForm from './components/UserForm';
import GetDish from './components/GetDish';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormikUserForm />
      </header>
      <div className="dishes">
        <GetDish />
      </div>
    </div>
  );
}

export default App;
