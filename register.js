document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const newUsername = document.getElementById("new-username").value.trim();
  const newPassword = document.getElementById("new-password").value.trim();
  const newRole = document.getElementById("new-role").value;

  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  if (accounts.some(account => account.username === newUsername)) {
    alert("Username already exists. Please choose another.");
    return;
  }

  accounts.push({ username: newUsername, password: newPassword, role: newRole });
  localStorage.setItem("accounts", JSON.stringify(accounts));
  alert("Account created successfully!");
  window.location.href = "index.html";
});
