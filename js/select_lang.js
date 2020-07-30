$(document).ready(() => {
    $('.container-widget__lang').click(() => {
        $('.lang-submenu').toggleClass('active');
        $('.container-widget__lang').toggleClass('active');
    });
    $(document).click((e) => {
        if(e.target.className !== 'container-widget__lang active'){
            $('.lang-submenu').removeClass('active');
            $('.container-widget__lang').removeClass('active');
        }
    });
});