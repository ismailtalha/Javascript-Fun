// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const once = (fn) => {
  debugger;

  var instance = function () {
    return fn();
  };
  if (!instance) {
    return instance;
  }
};

const task = () => {
  console.log('invoked');
};

const taskOnce = once(task);
taskOnce(); // expect to see `invoked` in the console
