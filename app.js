const tg = window.Telegram.WebApp;
tg.expand();

function add() {
  tg.sendData(JSON.stringify({
    action: "add",
    name: name.value,
    link: link.value
  }));
}
