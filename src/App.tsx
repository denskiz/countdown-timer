import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import formatDate from './formatDate';

const App: React.FC = () => {
  const year = new Date().getFullYear();
  const [date, setDate] = useState(`${year}-12-25`);
  const [newDeadline, setNewDeadline] = useState('');

  return (
    <div className="App">
      <div className="app">
        <h1 className="text-center">Countdown to {formatDate(date)}</h1>
        <Clock date={date} />
        <p className="text-center">Enter a Date:</p>
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            onChange={(e) => setNewDeadline(e.target.value)}
            placeholder="Enter a new date"
            aria-label="Enter a new date"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-light"
              onClick={() => setDate(newDeadline)}
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="text-center" id="source-code">
        <a
          href="https://github.com/denskiz/countdown-timer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-success">
            Source code on GitHub <i className="fa fa-github"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default App;
