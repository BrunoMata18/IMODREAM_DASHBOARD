$(document).ready(

    function(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/users",
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
                    html += `<tr>
                    <td>${result[i].name}</td>
                    <td>${result[i].bdate}</td>
                    <td>${result[i].utype}</td>
                    <td>${result[i].email}</td>
                    <td>${result[i].phoneN}</td>
                    ${buttons}</tr>`
                }

                tabela.innerHTML = html
            }

        });
    }

);
