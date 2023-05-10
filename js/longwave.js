var $grid = $('.grid').masonry({
    percentPosition: true,
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    stagger: 2
});

// change size of item by toggling gigante class
$grid.on('click', '.grid-item', function () {
    $(this).toggleClass('gigante');
    // trigger layout after item size changes
    $grid.masonry('layout');
});

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 75,
    smartBackspace: false,
    loop: true
});