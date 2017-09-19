$('.email-sign-up-button').on('click', function (event) {
    event.preventDefault();
    $('.email-sign-up-button').addClass('pressbutton');
    $('form div').addClass('formappear');
    $(".signup-input").focus();
});

$(".signup-input").on('keyup', function (e) {
    if (e.keyCode == 13) {
        document.getElementById("mc-embedded-subscribe-form").submit();
    }
});