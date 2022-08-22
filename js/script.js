const changeThemeBtn = document.querySelector("#change-theme")

// Toggle darkMode

function toggleDarkMode(){

    document.body.classList.toggle("dark");

}



changeThemeBtn.addEventListener("change", function () {

    toggleDarkMode();

    // Load light/dark mode

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    } 

})

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }