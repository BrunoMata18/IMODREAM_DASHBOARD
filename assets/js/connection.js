$(document).ready(

    function(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/users",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var down = document.getElementById("name");
                var obj = JSON.stringify(result);
                var res = [""];

                for(var i in obj)
                    res.push(obj[i]);
                down.innerHTML = obj[i] ;

                {

                }
            }

        });
    }
);