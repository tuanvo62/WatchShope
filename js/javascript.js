// When the user scrolls down 1050px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1050 ) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

//check form
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
                required: "Tên đăng nhập không được để trống",
                minlength: "Tên đăng nhặp phải lớn hơn 3 ký tự"
                },
            password:
            {
                required: "Mật khẩu không được để trống",
                minlength: "Mật khẩu phải hơn 3 ký tự",
                maxlength: "Mật khẩu phải ít hơn 10 ký tự"
                },
            comfirmPassword:
            {
                required: "Xác nhận lại mật khẩu",
                equalTo: "Mật khẩu khôgn đúng"
                },
            email:
            {
                required: "Email không được để trống",
                accept: "Chỉ chấp nhận gmail hoặc icloud"
            },
            },
        errorLableContainer: "#errorList",
        wrapper: "li"
    })
});
////
