async function loadMessages(){

    const response = await fetch("http://localhost:5000/api/contact");

    const data = await response.json();

    const table = document.getElementById("messageTable");

    table.innerHTML = "";

    data.forEach(contact=>{

        table.innerHTML += `

<tr>

<td>${contact.name}</td>

<td>${contact.email}</td>

<td>${contact.subject}</td>

<td>${contact.message}</td>

<td>${new Date(contact.createdAt).toLocaleString()}</td>

<td>

<button onclick="deleteMessage('${contact._id}')">

Delete

</button>

</td>

</tr>

`;

    });

}

loadMessages();

async function deleteMessage(id){

    const confirmDelete = confirm("Delete this message?");

    if(!confirmDelete) return;

    await fetch(`http://localhost:5000/api/contact/${id}`,{

        method:"DELETE"

    });

    loadMessages();

}


function logout(){

    localStorage.removeItem("adminLoggedIn");

    window.location.href="login.html";

}