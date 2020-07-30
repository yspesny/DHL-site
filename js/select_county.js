$(document).ready(() => {
    $('.container-widget-menu__elem2').click(() => {
        $('.country-submenu').toggleClass('active');
        $('.container-widget-menu__elem2').toggleClass('active');
    });
    $(document).click((e) => {
        if(e.target.className !== 'container-widget-menu__elem2 active'){
            $('.country-submenu').removeClass('active');
            $('.container-widget-menu__elem2').removeClass('active');
        }
    });
});