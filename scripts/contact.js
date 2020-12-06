let contact_block = document.getElementById("contact-block");
let contact_img = document.getElementById("contact_img");
let pop_up_form = document.getElementById("pop-up-form");

contact_block.addEventListener("click", hideContactBlock);
contact_img.addEventListener("click", displayContactBlock);
pop_up_form.addEventListener("click",displayContactBlock);

function displayContactBlock(){
  contact_block.classList.add("active");
}

function hideContactBlock(){
  contact_block.classList.remove("active");
}


