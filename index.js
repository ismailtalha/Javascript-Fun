// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const once = (fn) => {
  var invoked = false;
  return function () {
    if (!invoked) {
      invoked = true;
      return fn();
    }
  };
};

const task = () => {
  console.log('invoked1');
};

const taskOnce = once(task);
taskOnce(); // expect to see `invoked` in the console
taskOnce();
taskOnce();
taskOnce();
taskOnce();
taskOnce();

taskOnce();
taskOnce();