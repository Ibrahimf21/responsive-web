//glopal$


$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});

$(function () {
    'use strict';
    $('.main-bar span').click(function (e) {
        e.stopPropagation();
        $('.nav-list').toggleClass('hidden-xs');
    });
});