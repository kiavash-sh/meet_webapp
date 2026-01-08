const tg = Telegram.WebApp;
tg.expand();

let meets = {};

function saveMeet() {
  const name = document.getElementById("name").value.trim();
  const link = document.getElementById("link").value.trim();

  if (!name || !link) return;

  tg.sendData(JSON.stringify({
    action: "save",
    name,
    link
  }));

  document.getElementById("name").value = "";
  document.getElementById("link").value = "";
}

function render() {
  const box = document.getElementById("meets");
  box.innerHTML = "";

  Object.entries(meets).forEach(([name, link]) => {
    const div = document.createElement("div");
    div.className = "meet";
    div.innerHTML = `
      <b>${name}</b>
      <small>${link}</small>
      <button onclick="removeMeet('${name}')">Delete</button>
    `;
    box.appendChild(div);
  });
}

function removeMeet(name) {
  tg.sendData(JSON.stringify({
    action: "remove",
    name
  }));
}
