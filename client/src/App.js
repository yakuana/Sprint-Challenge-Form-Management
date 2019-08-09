import React from 'react';
import './App.css';
import FormikUserForm from './components/UserForm';
import GetDish from './components/GetDish';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormikUserForm />
        <GetDish />
      </header>
    </div>
  );
}

export default App;
