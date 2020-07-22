$(document).ready(function () {
    $('.burger_menu').click(function (event) {
        $('.burger_menu, .header-section  nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});