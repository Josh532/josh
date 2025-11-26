const menu = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".off-screen-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

});



  window.onload = function() {
    const currentURL = window.location.href;
    const lowerCaseURL = currentURL.toLowerCase();


    if (currentURL !== lowerCaseURL) {

      window.location.replace(lowerCaseURL);
    }
  };
</script>
