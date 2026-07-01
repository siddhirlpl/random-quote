export const logError = async (error) => {
  await fetch('http://localhost:9000/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: error.message,
      stack: error.stack,
      route: window.location.pathname,
    }),
  });
};
