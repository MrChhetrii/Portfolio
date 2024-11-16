
function openTab(tabName){
const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
  for(let tablink of tablinks){
    tablink.classList.remove("active-link");
  }

  for(let tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  
  document.getElementById(tabName).classList.add("active-tab");
}
 
document.addEventListener("DOMContentLoaded", () => {
const contactForm = document.querySelector('#contact-form');
const submitBtn= document.querySelector('.submit');

    submitBtn.addEventListener("click", () =>{
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#textarea').value.trim();
      const errorMessage = document.querySelector('#errorMessage');
      const successMessage = document.querySelector('#successMessage');
    
      if(name === "" || email === "" || message === ""){
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
      } else {
          errorMessage.style.display = 'none';
          successMessage.style.display = 'block';
          // Optionally clear the form fields after success
          contactForm.reset();
      }
    });
  });