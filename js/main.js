window.addEventListener("load",function(){
    let elem = document.querySelector('.grid');
    let iso = new Isotope( elem, {
        itemSelector: 'article',
        percentPosition: true,
  
    });

    const btnFilter = document.querySelectorAll(".btns > li");

    //배열 btnFilterm의 아이템 갯수만큼 반복
    for (let el of btnFilter){
        el.addEventListener("click",function(e){
            e.preventDefault();
            console.log(el)
            //this.classList.add("on");   여기 x

            for(let el of btnFilter){   //버튼 클릭하면 이미 on되어 있는 클래스 삭제함
                el.classList.remove("on");
            }
            this.classList.add("on");   
            //클릭한 대상 class 추가 
            //html all에 이미 on이 들어가 있기 때문에 remove를 해주고 난 후 
            //클릭한 대상에 on 추가

           // e.currentTarget.classList.add("on");  이방법도 이씀..

           //클릭한 버튼에 있는 a 태그의 href 값(value) 가져옴
           const filtering = e.currentTarget.querySelector("a").getAttribute("href");
           console.log(filtering)

           //jquery를 사용하지 않을 경우 arrange
           iso.arrange({filter:filtering});
        })
    }
    
});


//각 article 클릭하면 팝업
let items = document.querySelectorAll("article");
let pop = document.querySelector("#popup");

    for(const aa of items){
        aa.addEventListener("click",function(e){
            const w_width = document.body.clientWidth;
            console.log(w_width)
            if(w_width > 767){
                //클릭한 article img 의 src 값, h2, p를 변수에 저장
                const img = e.currentTarget.querySelector("img").getAttribute("src");
                const title = e.currentTarget.querySelector("h2").innerText;
                const desc = e.currentTarget.querySelector("p").innerText;

                //pop에 위의 변수를 적용
                pop.querySelector("img").setAttribute("src",img);
                pop.querySelector("h2").innerText = title;
                pop.querySelector("p").innerText = desc;

                pop.classList.add("on")
            }

        })
    }

    pop.addEventListener("click",function(){
        pop.classList.remove("on")
    });
    
    function resize(){
        const i_width = window.innerWidth;
        if(i_width < 767){
            pop.classList.remove("on");
        } else{
            pop.classList.add("on");
        }
        console.log(i_width)
    }
    

    window.addEventListener("resize",resize);
