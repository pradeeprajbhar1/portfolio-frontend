const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/admin/login", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            username,

            password

        })

    });

    const result = await response.json();

    if(result.success){

        localStorage.setItem("adminLoggedIn","true");

        window.location.href="admin.html";

    }

    else{

        alert(result.message);

    }

});