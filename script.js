/* =====================================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Author: Pradeep Rajbhar
   ===================================================== */

// ================= MOBILE NAVBAR =================

// Selecting Elements

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

// Open / Close Mobile Menu

menuIcon.addEventListener("click", () => {


    navLinks.classList.toggle("active");

});

// Close menu after clicking any link

document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


    });

});

// ================= DARK / LIGHT MODE =================

const themeButton = document.querySelector("#theme-toggle");

const themeIcon = themeButton.querySelector("i");

// Check saved theme

if(localStorage.getItem("theme") === "light"){


    document.body.classList.add("light-mode");


    themeIcon.classList.remove("fa-moon");


    themeIcon.classList.add("fa-sun");

}

// Theme Change Button

themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");



    if(document.body.classList.contains("light-mode")){


        localStorage.setItem("theme","light");


        themeIcon.classList.remove("fa-moon");


        themeIcon.classList.add("fa-sun");


    }


    else{


        localStorage.setItem("theme","dark");


        themeIcon.classList.remove("fa-sun");


        themeIcon.classList.add("fa-moon");


    }

});

// ================= SCROLL TO TOP =================

const scrollBtn = document.querySelector("#scroll-top");

window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){


        scrollBtn.style.display="block";


    }

    else{


        scrollBtn.style.display="none";


    }

});

scrollBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ================= ACTIVE NAVBAR LINK =================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){


            current = section.getAttribute("id");


        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");



        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });

});

// ================= AOS ANIMATION =================

// Initialize Scroll Animation

AOS.init({

    duration:1000,

    once:true

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("https://portfolio-backend-q2bk.onrender.com/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

        contactForm.reset();

    } catch (error) {

        alert("Something went wrong");

        console.log(error);

    }

});