// Mock XHR failure promise
// data - object with response received from API (e.g. { message: '', userMessage: '' })
// message - The message describing the HTTP code
// method - HTTP verb (e.g. POST)
// statusCode - HTTP status code
let failure = (data, message, method, statusCode) => {
  return Promise.reject({
    response: {
      data: data,
      headers: {
        'content-type': 'application/json'
      },
      method: method,
      statusCode: statusCode
    },
    message: message
  });
}
export { failure };

// Mock XHR success promise
let success = (value) => {
  return Promise.resolve({
    body: () => {
      return {
        data: () => {
          return value;
        }
      }
    }
  });
}
export { success };
