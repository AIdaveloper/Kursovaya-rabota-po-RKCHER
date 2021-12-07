var logo = document.querySelector('.hLogo>img');
var fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
var mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
// var mComplitPB = window.getComputedStyle(document.querySelector('main')).paddingBottom
// var mComplitP = window.getComputedStyle(document.querySelector('main')).padding
console.log(mComplitHeight)
// document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")


if(document.documentElement.clientWidth <= 1180){
    logo.setAttribute('src', "../../Source/Logo-1.svg")
    document.querySelector('.menu-header_menu').classList.remove('visible')


    fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
    mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
    console.log(mComplitHeight)
    document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")

}
else if (document.documentElement.clientWidth <= 1470){
    logo.setAttribute('src', "../../Source/Logo-2.svg")

    document.querySelector('body').classList.remove('scroll-hidden')
    document.querySelector('.header.icons.burger.first').classList.remove('active')
    document.querySelector('.menu-header_menu').classList.remove('visible')

        fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
        mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
        document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")

}
else  {
    document.querySelector('body').classList.remove('scroll-hidden')
    document.querySelector('.header.icons.burger.first').classList.remove('active')
    document.querySelector('.menu-header_menu').classList.remove('visible')

        fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
        mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
        document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")

}
window.addEventListener('resize', e=>{

    if(document.documentElement.clientWidth <= 1180){
        logo.setAttribute('src', "../../Source/Logo-1.svg")
        document.querySelector('body').classList.remove('scroll-hidden')
        document.querySelector('.header.icons.burger.first').classList.remove('active')
        document.querySelector('.menu-header_menu').classList.remove('visible')

        fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
        mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
        document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")

    }
    else if (document.documentElement.clientWidth <= 1470){
        logo.setAttribute('src', "../../Source/Logo-2.svg")
        document.querySelector('body').classList.remove('scroll-hidden')
        document.querySelector('.header.icons.burger.first').classList.remove('active')
        document.querySelector('.menu-header_menu').classList.remove('visible')

        fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
        mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
        document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")

    }
    else {
        logo.setAttribute('src', "../../Source/Logo-1.svg")
        document.querySelector('body').classList.remove('scroll-hidden')
        document.querySelector('.header.icons.burger.first').classList.remove('active')
        document.querySelector('.menu-header_menu').classList.remove('visible')

        fComplitHeight = window.getComputedStyle(document.querySelector('footer')).height
        mComplitHeight = window.getComputedStyle(document.querySelector('main')).height
        document.querySelector('main').setAttribute('style', "padding-bottom: calc(100vh - " + fComplitHeight + " - "+ mComplitHeight+ ");")

    }
})

var headerCondition = true;
var lastScroll = window.pageYOffset;
var scrollDir = window.pageYOffset;
var header = document.querySelector('header');

window.addEventListener('scroll', function (element){
    if(document.documentElement.clientWidth > 1180) return;
    if (scrollDir - window.pageYOffset < 0){
        if (headerCondition){
            lastScroll = window.pageYOffset;
            headerCondition = false;
        }
        else{
            if ((300 - (window.pageYOffset - lastScroll) <= 0)){
                header.classList.add('none');
            }
        }
    }
    else if (scrollDir - window.pageYOffset > 0){
        if (!headerCondition){
            lastScroll = window.pageYOffset;
            headerCondition = true;
        }
        else{
            if ((100 - (lastScroll - window.pageYOffset) <= 0)){
                header.classList.remove('none');
            }
        }
    }
    scrollDir = window.pageYOffset;
})

var burger = document.querySelector('.header.icons.burger.first');

burger.addEventListener('click', function (){
    burger.classList.toggle('active')
    if (burger.classList.contains('active')){
        document.querySelector('body').classList.add('scroll-hidden')
        document.querySelector('.menu-header_menu').classList.add('visible')
    }
    else   {
        document.querySelector('body').classList.remove('scroll-hidden')
        document.querySelector('.menu-header_menu').classList.remove('visible')
    }
})
