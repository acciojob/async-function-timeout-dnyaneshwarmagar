//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function(event) {
  event.preventDefault();

  // Retrieve user-provided text and delay values
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value) ; 

  try {
    // Introduce a delay before resolving the promise
    await delayInSeconds(delay);

    // Display the user-provided text on the webpage
    document.getElementById('output').innerText = text;
  } catch (error) {
    console.error(error);
  }
});

// Async function to introduce a delay before resolving the promise
function delayInSeconds(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
