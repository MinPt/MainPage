let contact_block = document.getElementById("contact-block");
let contact_img = document.getElementById("contact_img");

contact_block.addEventListener("click", hideContactBlock);
contact_img.addEventListener("click", displayContactBlock);

function displayContactBlock(){
  contact_block.classList.add("active");
}

function hideContactBlock(){
  contact_block.classList.remove("active");
}


