/*scroll event ******************************/
/*
var elem1 ="";
var elem2 ="";
$(window).scroll(function() {

    setTimeout(function(){
        elem1 = $(window).scrollTop();
    }, 10);

    setTimeout(function(){
        elem2 = $(window).scrollTop();
    }, 20);
    내릴 때 변수1<변수2
    올릴 때 변수1>변수2

    setTimeout(function(){
        if(elem1 > elem2){ 올릴 때
            $("#popUp").css('top', 0);
        }
        if(elem1 < elem2){ 내릴 때
            $("#popUp").css('top', '-50px');
        }
    }, 20);
});
*/
let elem1 = "";
let elem2 = "";
let popup = document.querySelector("#popUp");

window.addEventListener('scroll', function(){
    let scrollY = this.scrollY;
    //console.log(scrollY);

    setTimeout(() => {
        elem1 = scrollY;
    }, 10);

    setTimeout(() => {
        elem2 = scrollY;
    }, 20);

    setTimeout(() => {
        if(elem1 > elem2) {
            popup.style.top = "-50px";
        }
        if(elem1 < elem2) {
            popup.style.top = "0";
        }
    });
});


/*local navigator slideDown*************************************/
/*
$('header .inner_header>.gnb>ul>li').mouseover(function(){
$(this).find('ul').stop().slideDown();
});
$('header .inner_header>.gnb>ul>li').mouseout(function(){
$(this).find('ul').stop().slideUp();
});
*/ 
let gnb = document.querySelectorAll("header .inner_header>.gnb>ul>li");
let lang = document.querySelector("header .inner_header>aside>ul>li:first-of-type");

for (let i=0; i<2; i++) {   //i<gnb.length; 경우 3,4번 메뉴에 마우스가 닿았을때 지저분하게 계속해서 에러경고가 뜸(보여줄게 없으니까)
    gnb[i].addEventListener("mouseenter", function(){
        gnb[i].querySelector(".sub").style.display = "block";
    });
}

for (let i=0; i<2; i++) {
    gnb[i].addEventListener("mouseleave", function(){
        gnb[i].querySelector(".sub").style.display = "none";
    });
}



/*aside language ******************************************/
/*
사이드 언어설정
$('header .inner_header>aside>ul>li:first-of-type').click(function(){
$(this).toggleClass('on');
$(this).find(".lang").slideToggle();
});*/
let language = document.querySelector("header .inner_header>aside>ul>li:first-of-type");

language.addEventListener("click", function(){
    this.classList.toggle("on");
    this.querySelector(".lang").classList.toggle("on");
});


/*header design ********************************************/ 
/*
var SWITCH = false;
$('header button.btn_M').click(function(){ 헤더색상변화
$('header .gnb_M').toggleClass('on');
$('header').toggleClass('white');
$('header button.btn_M>span').toggleClass('on');
$('header .side_M>ul>li>p.num').toggleClass('on');
if(SWITCH == false){  검은색으로
    SWITCH = true;
    $('header .inner_header>h1>a>img').attr('src','imgs/half_logo_B.png');
    $('header .side_M>ul>li>a>img.a').attr('src','imgs/icon-account-B.png');
    $('header .side_M>ul>li>a>img.c').attr('src','imgs/icon-cart-B.png');
}else{  흰색으로
    SWITCH = false;
    $('header .inner_header>h1>a>img').attr('src','imgs/half_logo_W.png');
    $('header .side_M>ul>li>a>img.a').attr('src','imgs/icon-account.png');
    $('header .side_M>ul>li>a>img.c').attr('src','imgs/icon-cart.png');
}
});
$('header .gnb_M>ul>li>a.m').click(function(){ 서브메뉴
$(this).next().slideToggle();
$(this).parent().siblings().find('ul').slideUp();
});
*/


/*mainVisual 1,2 *******************************************/ 
/*
$(function(){
    var wWIDTH = $(window).width();
    if(wWIDTH <= 800){  브라우저 접속할 떄
        $('main>section.banner01>a>img').attr('src','imgs/FRmo1.jpg');
        $('main>section.banner02>a>img').attr('src','imgs/FRmo2.jpg');
    }
    $(window).on('resize',function(){  움직이면 리사이즈
    var wWIDTH = $(window).width();
    if(wWIDTH <= 800){
        $('main>section.banner01>a>img').attr('src','imgs/FRmo1.jpg');
        $('main>section.banner02>a>img').attr('src','imgs/FRmo2.jpg');
    } else if(wWIDTH > 800){
        $('main>section.banner01>a>img').attr('src','imgs/FRpc1.jpg');
        $('main>section.banner02>a>img').attr('src','imgs/FRpc2.jpg');
    }
});
});
*/
const body = document.getElementsByTagName("body")[0];
const banner01 = document.querySelector("main>section.banner01>a>img");
const banner02 = document.querySelector("main>section.banner02>a>img");
const Img01 = banner01.getAttribute("src"); 
const Img02 = banner02.getAttribute("src");

/*
window.onresize = function () {
    let innerWidth = window.innerWidth;
    innerWidth <= "800" ?  body.style.color = "red" : body.style.color = "green";
}*/


/*btn_toTop *******************************************/ 
/*
var btn1 ='';
var btn2 ='';
$(window).scroll(function() {
setTimeout(function(){
    btn1 = $(window).scrollTop();
}, 10);

setTimeout(function(){
    btn2 = $(window).scrollTop();
}, 20);
내릴 때 변수1<변수2
올릴 때 변수1>변수2

setTimeout(function(){
    if(btn1 == 0){  최상단 올렸을 때
        $('footer button.btn_toTop').css('opacity', '0');
    }
    if(btn1 < btn2){  내릴 때
        $('footer button.btn_toTop').css('opacity', '1');
    }
}, 20);
});

$('footer button.btn_toTop').click(function(){
    $('html').animate({scrollTop:'0'},400,'swing');
});
*/

let btnTop = document.querySelector("footer button.btn_toTop");

window.addEventListener("scroll", function() {
    let btn = "";
    let scrollY = this.scrollY;
    btn = scrollY;
    
    if (btn < 20) {
        btnTop.style.opacity = "0";
    }
    else {
        btnTop.style.opacity = "1";
    }
});

btnTop.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: "smooth"});
});

