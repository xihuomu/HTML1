let wrap = document.querySelector('.wrap');
let leftNum = 0;
let flag = true;
// setInterval(function(){
//     if(flag){
//         --leftNum;
//     }else{
//         ++leftNum;
//     }
//     if(leftNum == -2401){
//         flag = false;
//     }
//     if(leftNum == 1){
//         flag = true;
//     }
//     wrap.style.left = leftNum + "px";
// },0.05);
// Array.of(...document.getElementsByClassName("arrow_left")).forEach(e => e.onclick = function(){
//     let classArr = this.getAttribute("class").split(" ");
//     if(classArr.includes("arrow_right")){
//         //右击
//         leftNum =  (parseInt(leftNum/600)-1)*600
//     }else{
//         //左击
//         leftNum = (parseInt(leftNum/600))*600
//     }
//     leftNum = (parseInt(leftNum/600))*600
// });
function autoPlay(){
    timer = setInterval(() => {
        if(leftNum < 5){
            leftNum = leftNum +1;
        }
        if(leftNum == 5){
            leftNum = 0;
        }
        wrap.style.left = "-" + leftNum*600 + "px";
    }, 1000);
}
autoPlay();
wrap.onmouseenter = function (){
    clearInterval(timer);
}
wrap.onmouseleave = function (){
    autoPlay();
}
// arrow_left.onmouseenter = function (){
//     clearInterval(timer);
// }
// arrow_left.onmouseleave = function (){
//     autoPlay();
// }
Array.of(...document.getElementsByClassName("arrow_left")).forEach(e => e.onclick = function(){
    let classArr = this.getAttribute("class").split(" ");
        if(classArr.includes("arrow_right")){
           if(leftNum != 4){
                leftNum = leftNum + 1;
           }
        }else{
            if(leftNum != 0){
                leftNum = leftNum - 1;
            }
        }
        document.getElementsByClassName("wrap")[0].style.left = "-" + leftNum*600 + "px";
});