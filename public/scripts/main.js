document.addEventListener('DOMContentLoaded', function() {
      
    //let app = firebase.app();
    document.getElementById("loginBtn").style.display = "block";
    loadApp();
});

function loadApp() {
    //populate data
    //..//
    openModule(0);
    document.getElementById("loadScreen").style.display = "none";
    document.getElementById("app").style.display = "flex";
}
function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      loadApp();
    }).catch((error) => {
      console.error(error);
    });
}
function createSociety() {
    var dbRef = firebase.database().ref();
    dbRef.child()
}
function openModule(index) {
    let modules = document.getElementsByClassName("module");
    let moduleBtns = document.getElementsByClassName("module_btn");
    for (let i = 0; i < 3; i++) {
        if (index == i) {
            modules[i].style.display = "block";
            moduleBtns[i].classList.add("focussed_module_btn");
        }
        else {
          modules[i].style.display = "none";
          moduleBtns[i].classList.remove("focussed_module_btn");
        }
    }
}