$(document).ready(function() {
    $('.toggle').click(function() {
        if ($(this).next().hasClass('show')) {
            $(this).next().removeClass('show')
            $(this).next().slideUp(350, "linear")
        } 
        else {
            $(this).parent().parent().find('li .inner').removeClass('show')
            $(this).parent().parent().find('li .inner').slideUp(350, "linear")
            $(this).next().toggleClass('show')
            $(this).next().slideToggle(350, "linear")
        }
    })
})