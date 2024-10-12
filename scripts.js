const text = "HEY, I'M NITHIN RAJ"; // Name
const heading = document.querySelector('.home-content-heading');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heading.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100); // speed
    } else {
        heading.innerHTML = text + '<span class="blink">.</span>'; // blinking dot
    }
}

window.onload = function () {
    typeWriter();
};



document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header__link');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});



// email contact

function showLoading(){
    const lodButton=document.getElementById("submit_button");
    lodButton.innerHTML=`<p class="sending" >Sending</P>
<div class="loader">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>`;
}


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch the form data
    const formData = {
      name: document.getElementById("name").value,
      emailid: document.getElementById("emailid").value,
      message: document.getElementById("message").value
    };

    // Send the data via fetch API
    fetch("https://formsubmit.co/ajax/nithinrajvv3050@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const button=document.getElementById("submit_button");
        button.style.backgroundColor = "#04d30ece";
        button.innerHTML = "Message Send";

        setTimeout(() => {
            document.getElementById("contact-form").reset();
            button.style.backgroundColor = "#353535";
            button.innerHTML = "Send";
          }, 5000);
      })
      .catch(error => {
        console.log(error);
        const button=document.getElementById("submit_button");
        button.style.backgroundColor = "#e20707";
        button.innerHTML = "Error Message Not Send! ";
        setTimeout(() => {
            document.getElementById("contact-form").reset();
            button.style.backgroundColor = "#353535";
            button.innerHTML = "Send";
          }, 5000);
      });
  });

