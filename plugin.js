(function() {
  // Get the current URL and check if it has the "iframe_url" parameter
  var urlParams = new URLSearchParams(window.location.search);
  var iframeUrl = urlParams.get('iframe_url');
  if (!iframeUrl) return;

  // Create the iFrame element and set its src to the URL from the parameter
  var iframe = document.createElement('iframe');
  iframe.src = iframeUrl;
  iframe.style.border = 'none';

  // Create the hover button and set its text to "Close"
  var button = document.createElement('button');
  button.innerHTML = 'Close';
  button.style.position = 'absolute';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.zIndex = '999';

  // Add the iFrame and button to the page
  document.body.appendChild(iframe);
  document.body.appendChild(button);

  // Add an event listener to the button to remove the iFrame and button when clicked
  button.addEventListener('click', function() {
    document.body.removeChild(iframe);
    document.body.removeChild(button);
  });
})();
