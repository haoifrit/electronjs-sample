// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

// A mock function to mimic making an async request for data
export function fetchFail() {
  return new Promise.reject(new Error('fail'));
}
