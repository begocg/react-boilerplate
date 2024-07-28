import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card">
      <div className="text-center custom-bg text-black">
        <h1>Hello!</h1>
      </div>
      <div className="card-body">
        <p className="card-text">
          This is a boilerplate with React, Bootstrap, ESlint, Jest and react-docgen.
        </p>
        <p className="card-text">
          I hope all of you enjoy this and find this useful for your future projects.
        </p>
        <p className="card-text">Thanks,</p>
        <p className="card-text">
          <strong>Bego C. Gonzalez</strong>
        </p>
        <p className="card-text">
          <em>(a translator EN/ES/IT and now a web developer)</em>
        </p>
      </div>
    </div>
  </div>
);

export default App;

