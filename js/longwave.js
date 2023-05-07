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

var options = {
    strings: ['This is an example of a typing effect', 'It can be used to create cool animated text', 'You can customize the speed, pauses, and more'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};

var typed = new Typed('.typing-effect', options);