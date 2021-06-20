$(".reviews-row").slick({
    draggable: true,
    arrows: false,
    slidesToShow: 3,
    infinite: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 359,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})