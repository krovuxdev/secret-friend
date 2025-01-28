let friends = [];

function add_friend() {
    let name_value = document.getElementById("amigo");
    name_value.value != ""
        ? friends.push(name_value.value)((name_value.value = "")(add_li()))
        : alert("Por favor, inserte un nombre.");
}

function add_li() {
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    friends.map((i) => (li.innerHTML = i));
    ul.appendChild(li);
    document.getElementById("resultado").innerHTML = ``;
}

function friend_drawing() {
    if (friends.length !== 0) {
        let random_friend = Math.floor(Math.random() * friends.length);
        let result = document.getElementById("resultado");
        document.getElementById("listaAmigos").innerHTML = ``;
        result.innerHTML = `
        El amigo secreto sorteado es: ${friends[random_friend]}
        `;
        friends = [];
    } else {
        document.getElementById("amigo").focus();
    }
}
