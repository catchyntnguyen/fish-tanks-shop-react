import $ from 'jquery';

$(document).ready(function () {
    // Initialize slick sliders
    $('.image-silder').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false
    });
    

    $('.session_products').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: "<button type='button' style='right:30px;' class='slick-prev pull-left btn_slide'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' style='right: -30px;' class='slick-next pull-right btn_slide'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });

    $('.cooperateList').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        prevArrow: false,
        nextArrow: false
    });

    // Toggle class active for showUl elements
    document.querySelectorAll('.showUl').forEach((element) => {
        element.addEventListener('click', () => {
            const parentElement = element.parentElement;
            if (parentElement) {
                const ulElement = parentElement.querySelector('ul');
                const chevron = parentElement.querySelector('.showUl i');
                if (ulElement && chevron) {
                    ulElement.classList.toggle('active');
                    chevron.classList.toggle('fa-chevron-up');
                    chevron.classList.toggle('fa-chevron-down');
                }
                // console.log();   
            }
        });
    });

    // Toggle class active for btnDetailproductcart elements
    document.querySelectorAll('.btnDetailproductcart').forEach((element) => {
        element.addEventListener('click', () => {
            const parentElement = element.parentElement;
            if (parentElement) {
                const ulElement = parentElement.querySelector('.detailproductcart');
                const chevron = parentElement.querySelector('.btnDetailproductcart div i');
                if (ulElement && chevron) {
                    ulElement.classList.toggle('active');
                    chevron.classList.toggle('fa-chevron-up');
                    chevron.classList.toggle('fa-chevron-down');
                }
            }
        });
    });

    // Ensure only one "pay" checkbox is checked
    const checkboxes = document.querySelectorAll('input[name="pay"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            checkboxes.forEach((cb) => {
                if (cb !== this) {
                    cb.checked = false;
                }
            });
        });
    });
});
