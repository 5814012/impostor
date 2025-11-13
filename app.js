if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker registrado con éxito.'))
    .catch(err => console.error('Error al registrar SW:', err));
}