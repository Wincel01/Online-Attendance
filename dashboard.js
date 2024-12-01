document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userRoleSpan = document.getElementById("user-role");
  const attendanceList = document.getElementById("attendance-list");

  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  userRoleSpan.textContent = currentUser.role;

  const attendees = JSON.parse(localStorage.getItem("attendance")) || [];
  attendees.forEach(name => addAttendeeToList(name));

  document.getElementById("attendance-form").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    attendees.push(name);
    localStorage.setItem("attendance", JSON.stringify(attendees));
    addAttendeeToList(name);
    event.target.reset();
  });

  function addAttendeeToList(name) {
    const li = document.createElement("li");
    li.textContent = name;
    attendanceList.appendChild(li);
  }
});
