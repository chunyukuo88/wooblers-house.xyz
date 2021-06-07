let timeoutID;

export default function idleTimer() {
  window.addEventListener('click', () => {
    logEvent('reset timer.');
    clearAlert();
    setAlert();
  });
  setAlert();
};

function setAlert() {
  // console.time('time');
  // timeoutID = window.setTimeout(logEvent, 5000, 'User is idle.');
  // console.timeEnd('time');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}

const logEvent = (event) => {
  // console.log(event);
};
