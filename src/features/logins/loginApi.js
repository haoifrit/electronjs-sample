// A mock function to mimic making an async request for data
export function login(username="klt") {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ username: username, status: "login" }), 500)
    );
  }

// A mock function to mimic making an async request for data
export function logout() {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ username: null, status: "logout" }), 500)
    );
  }