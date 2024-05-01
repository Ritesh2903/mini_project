let displayData = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let storedUser = JSON.parse(localStorage.getItem("users"));
    if (storedUser == null || !Array.isArray(storedUser)) {
      storedUser = [];
    }
    storedUser.forEach(
      (user, index) =>
        (tbody.innerHTML += `
                  <tr>
                      <td>${index + 1}</td>
                      <td>${user.name}</td>
                      <td>${user.username}</td>
                      <td>${user.email}</td>
                      <td>${user.phone}</td>
                      <td>${user.address.city}</td>
                  </tr>`)
    );
  };
  displayData();