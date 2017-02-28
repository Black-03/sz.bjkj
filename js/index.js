$(function(){
    //项目展示js
    function $id(id){
        return document.getElementById(id);
    }
    var ul = $id("p-shows");
    var liWidth = ul.children[0].offsetWidth;
    function move(){
        var currentLeft = ul.offsetLeft;
        currentLeft += -1;
        if(currentLeft < max){
            ul.style.left = "0px";
        }else{
            ul.style.left = currentLeft + "px";
        }
    }
    var max = (ul.children.length - 1) * liWidth * -1;
    var timer;
    ul.onmouseover = function(){
        clearInterval(timer);
    }
    ul.onmouseout = function(){
        timer = setInterval(move,20);
    }
    timer = setInterval(move,20);
})
