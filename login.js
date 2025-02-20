async function cadastrarUsuario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
    });
    const data = await response.json();
    document.getElementById("mensagem").innerText = data.mensagem;
}

async function editarUsuario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/editar", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
    });
    const data = await response.json();
    document.getElementById("mensagem").innerText = data.mensagem;
}

async function deletarUsuario() {
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/deletar", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    });
    const data = await response.json();
    document.getElementById("mensagem").innerText = data.mensagem;
}