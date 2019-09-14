$(document).ready(function() {
    $('.main_btna').on('click', () => {
        openForm();
    });

    $('.main_btn').on('click', () => {
        openForm();
    });

    $('a[href|="#sheldure"]').on('click', () => {
        openForm();
    });

    $('.modal .close').on('click', () => {
        closeForm();
    });

    function openForm() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown();
    }

    function closeForm() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp();
    }
});