$(document).ready(

    function(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/users",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var down = document.getElementById("list");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i].name);
                    //down.innerHTML = obj[i];
                    let td = document.createElement("td");
                    td.innerText = result[i].name;
                    down.appendChild(td);

                }
            }

        });
    }

);

