// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animate destination cards on hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0px 10px 20px rgba(0,0,0,0.3)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.2)';
    });
});

// Dynamic greeting
const hero = document.querySelector('.hero h1');
const hour = new Date().getHours();
if (hour < 12) hero.textContent = "Good Morning! Explore Incredible India!";
else if (hour < 18) hero.textContent = "Good Afternoon! Explore Incredible India!";
else hero.textContent = "Good Evening! Explore Incredible India!";


// contact
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent ✨");
    this.reset();
});


// about

document.addEventListener("DOMContentLoaded", () => {
const aboutSection = document.querySelector('.about-section');


const revealAbout = () => {
const sectionTop = aboutSection.getBoundingClientRect().top;
const windowHeight = window.innerHeight;


if (sectionTop < windowHeight - 100) {
aboutSection.classList.add('show');
}
};


window.addEventListener('scroll', revealAbout);
revealAbout(); // run once on load
});


// destination

function goToDetails() {
      window.location.href = "agra.html";
    }
// localStorage


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    localStorage.setItem("contactData", JSON.stringify(data));

    status.textContent = "Message saved successfully ✅";
    form.reset();
  });
});


// login

document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // stop refresh

      // OPTIONAL validation
      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;

      if (user && pass) {
        // Redirect to Home page
        window.location.href = "index.html";
      }
    });

//  arrow
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


//   search bar

  function filterCards() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = title.includes(input) ? "block" : "none";
    });
  }


   