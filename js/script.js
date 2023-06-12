/*============ toggle icon navbar ==============*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onClick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*============ Scroll sections active link ==============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /*============ sticky navbar ==============*/

  let.header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*============ remove toggle icon and navbar when click navbar link (scroll) ==============*/
    menuIcon.classList.remove|("bx-x");
    navbar.classList.remove("active");

};

  /*============ scroll reveal ==============*/

   ScrollReveal({ 
    //reset: true,
    distance:  '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: 'top'});
  ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: 'right' });

    /*============ typed js ==============*/

   const typed = new Typed('.multiple-text',{
    strings: ['FrontEnd Developer Jr', 'Graphic Designer', 'Community Mannager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
   })


   // Llamar a la función 'authorize' al cargar la página
window.onload = function() {
  handleClientLoad();
};

// Cargar la biblioteca de la API de Gmail
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Inicializar la API de Gmail
function initClient() {
  gapi.client
    .init({
      apiKey: "AIzaSyBtH4v8KZv9TiqfjdIjNm3ns2wHvAj29Qg",
      clientId: "Tenvio-de-correo-389600",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
      ],
      scope: "https://www.googleapis.com/auth/gmail.send",
    })
    .then(
      function () {
        // Autenticación exitosa
        gapi.auth2.getAuthInstance().signIn();
      },
      function (error) {
        console.log(error);
      }
    );
}

// Enviar el correo electrónico
function sendEmail() {
  var form = document.getElementById("emailForm");
  var namef = form.elements.namef.value;
  var email = form.elements.email.value;
  var phone = form.elements.phone.value;
  var subject = form.elements.subject.value;
  var message = form.elements.message.value;

  var email = [
    'Content-Type: text/plain; charset="UTF-8"\r\n',
    "MIME-Version: 1.0\r\n",
    "From: " + email + "\r\n",
    "To: " + namef + "\r\n",
    "Subject: " + subject + "\r\n\r\n",
    message,
  ].join("");

  var base64EncodedEmail = btoa(email).replace(/\+/g, "-").replace(/\//g, "_");

  gapi.client.gmail.users.messages
    .send({
      userId: "me",
      resource: {
        raw: base64EncodedEmail,
      },
    })
    .then(
      function (response) {
        console.log("Correo electrónico enviado.");
        form.reset();
      },
      function (error) {
        console.log(error);
      }
    );

  return false;
}


// Agregar el evento submit al formulario
var form = document.getElementById('emailForm');
form.addEventListener('submit', sendEmail);