const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false // default: true
}

var temaCor = 0;

function addDarkmodeWidget() {
  /*new Darkmode().showWidget();*/
  new Darkmode()
}
window.addEventListener('load', addDarkmodeWidget);

function nextVersion() {
  alert('Por favor, aguarde até a próxima atualização.')
}

function temaEscuro() {

  navTema = document.getElementById("btnSwitch")
  var element = document.body;

  element.classList.toggle("dark-mode");
  checaTema()
}

function checaTema() {
  if (temaCor == 0) {
    navTema.innerHTML = '<img src="./img/icons/switchThemeClear.png"></img>'
    temaCor = temaCor + 1
  } else if (temaCor == 1) {
    navTema.innerHTML = '<img src="./img/icons/switchTheme.png"></img>'
    temaCor = 0
  }
}

