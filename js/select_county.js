$(document).ready(() => {
    $('.container-widget-menu__elem2').click(() => {
        $('.country-submenu').toggleClass('active');
    });
    $(document).click((e) => {
        if(e.target.className !== 'container-widget-menu__elem2'){
            $('.country-submenu').removeClass('active');
        }
    });
});