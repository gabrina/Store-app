class users {
  constructor(parent, users) {
    this.parent = parent;
    this.users = users;
  }

  showusers() {
    this.parent.innerHTML = "";
    this.users.forEach((user) => this.createCard(user));
  }

  createCard(data) {
    const { address, email, id, name, phone, username } = data;

    const card = document.createElement("div");
    card.id = "user-row";
    card.innerHTML = `<span id="row-number">${id}</span>
          <div id="user-card">
            <span id="user-label"><i class="fa-solid fa-user"></i> Name:</span>
            <span id="user-data">${name.firstname} ${name.lastname}</span>
          </div>
          <div id="user-card">
            <span id="user-label"><i class="fa-solid fa-envelope"></i> Username:</span>
            <span id="user-data">${username}</span>
          </div>
          <div id="user-card">
            <span id="user-label"><i class="fa-solid fa-envelope"></i> Email:</span>
            <span id="user-data">${email}</span>
          </div>
          <div id="user-card">
            <span id="user-label"><i class="fa-solid fa-phone"></i> Phone:</span>
            <span id="user-data">${phone}</span>
          </div>
          <div id="user-card">
            <span id="user-label"><i class="fa-solid fa-envelope"></i> Address:</span>
            <span id="user-data">${address.city}-${address.street}-${address.zipcode}</span>
          </div>`;
    this.parent.appendChild(card);
  }
}

export default users;
