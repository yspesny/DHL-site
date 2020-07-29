$(document).ready(() => {
    $('.container-widget__lang').click(() => {
        $('.lang-submenu').toggleClass('active');
    });
    $(document).click((e) => {
        if(e.target.className !== 'container-widget__lang'){
            $('.lang-submenu').removeClass('active');
        }
    });
});