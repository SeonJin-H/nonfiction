# Markup-Project-Nonfiction
스크립트를 적용한 반응형 웹사이트 구축(개인프로젝트)

![목업](https://github.com/SeonJin-H/nonfiction/blob/main/nonfiction_mockup.png)
Demo: <http://hwang1404.dothome.co.kr>


### 📑 개발 목표
* CSS 클래스 부여 및 스타일 적용 연습
* 제이쿼리의 다양한 메소드 사용 및 작동 방식 이해
* 미디어 쿼리를 이용한 반응형 웹페이지 구축


### 🛠️ 사용 기술
* HTML
* CSS
* jQuery
* Media Query 


### 💎 주요 기능
* 제이쿼리 스크로 이벤트를 이용한 동적 효과 중첩 적용
![작동예시](https://github.com/SeonJin-H/nonfiction/blob/main/scroll01.png)
~~~
var elem1 ="";
var elem2 ="";
$(window).scroll(function() {

    setTimeout(function(){
        elem1 = $(window).scrollTop();
    }, 10);

    setTimeout(function(){
        elem2 = $(window).scrollTop();
    }, 20);
    //내릴 때 변수1<변수2
    //올릴 때 변수1>변수2

    setTimeout(function(){
        if(elem1 > elem2){ //올릴 때
            $("#popUp").css('top', 0);
        }
        if(elem1 < elem2){ //내릴 때
            $("#popUp").css('top', '-50px');
        }
    }, 20);
});
~~~
![작동예시](https://github.com/SeonJin-H/nonfiction/blob/main/scroll02.png)
~~~
var btn1 ='';
var btn2 ='';
$(window).scroll(function() {
    setTimeout(function(){
        btn1 = $(window).scrollTop();
    }, 10);

    setTimeout(function(){
        btn2 = $(window).scrollTop();
    }, 20);
    //내릴 때 변수1<변수2
    //올릴 때 변수1>변수2

    setTimeout(function(){
        if(btn1 == 0){ //최상단 올렸을 때
            $('footer button.btn_toTop').css('opacity', '0');
        }
        if(btn1 < btn2){ //내릴 때
            $('footer button.btn_toTop').css('opacity', '1');
        }
    }, 20);
});

$('footer button.btn_toTop').click(function(){
 $('html').animate({scrollTop:'0'},400,'swing');
})
~~~

* 제이쿼리 메소드를 이용한 모바일 모드 헤더 색상 변환
![작동예시1](https://github.com/SeonJin-H/nonfiction/blob/main/header_c01.png)
![작동예시2](https://github.com/SeonJin-H/nonfiction/blob/main/header_c02.png)
* 메인 영역 하단 CSS 필터 스타일 적용
* 미디어 쿼리를 이용한 전체 페이지 개발


### 💡 개선 사항
* header 영역 hover 이벤트 색상 변경 필요
* footer 영역 여백 재설정 필요

### 🖥️ 작업 기여
* 웹사이트 전체 구축
* 기여도 100%
