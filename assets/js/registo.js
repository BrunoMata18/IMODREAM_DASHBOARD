async function createUser() {

    let res = document.getElementById("result");

    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pw: document.getElementById("pw").value,
        morada: document.getElementById("morada").value,
        bdate: document.getElementById("bdate").value,
        phoneN: document.getElementById("phoneN").value
    }
    console.log("[UtilizadorCriado] data = " + JSON.stringify(data));
    try {
        let newUser = await $.ajax({
            url: "https://imodream-api.herokuapp.com/api/users/add_users",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
            res.innerHTML = err.responseJSON.msg;
        } else {
            res.innerHTML = "Was not able to add product";
        }
    }
}

//Adicionar toaster mensagem de erro/sucesso