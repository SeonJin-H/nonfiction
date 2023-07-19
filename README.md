# Markup-Project-Nonfiction
바닐라 자바스크립트를 이용한 반응형 웹사이트 구축(개인프로젝트)

![목업](https://github.com/SeonJin-H/nonfiction/blob/master/nonfiction_mockup.png)
Demo: <http://hwang1404.dothome.co.kr>


### 📑 개발 목표
* CSS 클래스 부여 및 스타일 적용 연습
* 자바스크립트의 다양한 메소드 사용 및 작동 방식 이해
* 미디어 쿼리를 이용한 반응형 웹페이지 구축


### 🛠️ 사용 기술
* HTML
* CSS
* javaScript
* Media Query 


### 💎 주요 기능
* 스크롤 이벤트를 이용한 동적 효과 중첩 적용
![작동예시](https://github.com/SeonJin-H/nonfiction/blob/master/scroll01.png)
~~~
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
~~~
![작동예시](https://github.com/SeonJin-H/nonfiction/blob/master/scroll02.png)
~~~
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
~~~

* 속성값 변환을 이용한 모바일 모드 헤더 스타일 변환
![작동예시1](https://github.com/SeonJin-H/nonfiction/blob/master/header_c01.png)
![작동예시2](https://github.com/SeonJin-H/nonfiction/blob/master/header_c02.png)
* 메인 영역 CSS 필터 스타일 적용
* 미디어 쿼리를 이용한 전체 페이지 개발


### 💡 개선 사항
* header 영역 hover 이벤트 색상 눈에 띄도록 변경 필요
* footer 영역 여백 재설정 필요

### 🖥️ 작업 기여
* 웹사이트 전체 구축
* 기여도 100%
