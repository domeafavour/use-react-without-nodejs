function onError(err) {
  console.error('Error registering service worker:', err);
  document.getElementById('app').innerText = err.toString();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js', {
      scope: '/',
    })
    .then((registration) => {
      window.ServiceWorkerRegistration = registration;
    })
    .catch(onError);
} else {
  onError('Browser does not support service workers :-(');
}
