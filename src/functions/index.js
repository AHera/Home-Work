import { users } from "../data";

import "./style.css";

export function createUserList() {
  const userBlock = document.querySelector("#user-list");
  let html = "";

  for (const user of users) {
    html += `
        <div class="line-item">
        <span class="item-id">${user.id}</span>
        <span class="item-name">${user.name}</span>
        <span class="item-age">${user.age}</span>
        <span class="item-email">${user.email}</span>
        <span class="item-country">${user.country}</span>
        <span class="item-company">${user.company}</span>
        <span class="item-birthday">${user.birthday}</span>
        </div>
        `;
  }

  userBlock.innerHTML = html;
}
