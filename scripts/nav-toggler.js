let navbar = document.getElementById("navbar");
let toggler = document.getElementById("navbar-toggler");
toggler.isOpened = false;
toggler.addEventListener("click",toggleNavBar)

function toggleNavBar(){

  if(toggler.isOpened){
    navbar.classList.remove("opened");
  }else{
    navbar.classList.add("opened");
  }
  toggler.isOpened = !toggler.isOpened;
}
