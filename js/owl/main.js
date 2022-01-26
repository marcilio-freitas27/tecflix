$('.owl-carousel').owlCarousel({
    /*loop: repete as imagens*/
    loop:true,
    /*separa as imagens, margem*/
    margin:10,
    /* botões de navegação*/
    nav:false,
    /*responsividade: tudo se adapta ao tamanho da tela. Items por pixels*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})