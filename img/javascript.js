$(function (){
    $("#form1").validate({
        rules:
        {
            hoten:
            {
                required: true,
                minlength: 3
                },
            password:
            {
                required: true,
                minlength: 3,
                maxlength: 10
                },
            comfirmPassword:
            {
                required: true,
                minlength: 3,
                equalTo: "#password",
                },
            email:
            {
                required: true,
                email: true,
                accept: "gmail.com|icloud.com"
            },
            },
        messages:
        {
            hoten:
            {
                required: "User name not empty",
                minlength: "User name less than 3 character."
                },
            password:
            {
                required: "Password not empty",
                minlength: "Password less than 3 character",
                maxlength: "Password more than 10 character"
                },
            comfirmPassword:
            {
                required: "ComfirmPassword not empty",
                equalTo: "Password no match"
                },
            email:
            {
                required: "Email not empty",
                accept: "Accept gmail or icloud only"
            },
            },
        errorLableContainer: "#errorList",
        wrapper: "li"
    })
    });