$(document).ready(function() {

    $('#btnSubmit').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        const formData = {
            Name: jQuery('[Name=Name]').val(),
            Email: jQuery('[name=Email]').val(),
            Pw: jQuery('[name=Pw]').val(),
            Morada: jQuery('[name=Morada]').val(),
            Criacao: jQuery('[name=Criacao]').val(),
            PhoneN: jQuery('[name=PhoneN]').val()
        }; //Array

        $.ajax({
            url : "https://imodream-api.herokuapp.com/api/imo/add_imo",
            type: "POST",
            data : formData, // data in json format
            async : false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
            success: function(response, textStatus, jqXHR) {
                console.log(response);
                localStorage.setItem("imo", JSON.stringify(response))

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
});