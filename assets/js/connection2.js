$(document).ready(

    function(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/imo",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var obj = JSON.stringify(result);
                console.log(obj);
                let tabela = document.querySelector("#tabela")
                let html = ""
                let buttons = "<td>" +
                    "                <div class=\"btn-group\">" +
                    "                  <button type=\"button\" class=\"btn btn-warning\">Editar</button>" +
                    "                </button>" +
                    "              </div>" +
                    "              </td>" +
                    "              <td>" +
                    "                <div class=\"btn-group\">" +
                    "                  <button type=\"button\" class=\"btn btn-danger\">Desativar</button>" +
                    "                  </button>" +
                    "                </div>" +
                    "              </td>"

                for (let i in result)
                {
                    html += `<tr><td>${result[i].name}</td>
                    <td>${result[i].criacao}</td>
                    <td>${result[i].email}</td>
                    <td>${result[i].phoneN}</td>
                    ${buttons}</tr>`
                }

                tabela.innerHTML = html
            }

        });
    }

);
