/* change navbar color while scroll */
const nav1 = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 56){
        nav1.classList.add('navbar-scrolled');
    }else if(window.scrollY < 56){
      nav1.classList.remove('navbar-scrolled');
    }
});

/* validation */
function validateForm() {
  let name = document.forms["contactForm"]["inputName"].value;
  let email = document.forms["contactForm"]["inputEmail"].value;
  let phone = document.forms["contactForm"]["inputPhone"].value;

  if (name == "") {
    alert("Name must be filled out");
    window.location.reload();
  }
  else if (email == "") {
    alert("Email address must be filled out");
    window.location.reload();
  }
  else if (phone == "") {
    alert("Phone must be filled out");
    window.location.reload();
  }
  else window.location.assign("./done.html");
}