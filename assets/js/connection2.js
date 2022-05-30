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
                    "                <div class='btn-group'>" +
                    "                  <button type='button' class='btn btn-warning fas fa-edit'></button>" +
                    "                </button>" +
                    "              </div>" +
                    "              </td>" +
                    "              <td>" +
                    "                <div class='btn-group'>" +
                    "                  <button type='button' class='btn btn-danger fas fa-ban'></button>" +
                    "                  </button>" +
                    "                </div>" +
                    "              </td>"

                for (let i in result)
                {
                    html += `<tr><td>${result[i].Name}</td>
                    <td>${result[i].Criacao}</td>
                    <td>${result[i].Email}</td>
                    <td>${result[i].PhoneN}</td>
                    ${buttons}</tr>`
                }

                tabela.innerHTML = html
            }

        });
    }

);
