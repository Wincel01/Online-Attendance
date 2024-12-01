document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  const user = accounts.find(account => account.username === username && account.password === password && account.role === role);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
