let rotation_l = document.querySelector('.rotation_l');
let rotation_r = document.querySelector('.rotation_r');
let rotation = document.querySelector('.rotation_all');
let ul = rotation.children[0];
let ol = rotation.children[3];
let ul_width = ul.children[0].offsetWidth;
let num = 0 ;
let circle=0;
//鼠标移动，箭头显示
rotation.addEventListener('mouseenter', function(){
    rotation_l.style.display = 'block';
    rotation_r.style.display = 'block';
    clearInterval(timer);
    timer=null;
})
rotation.addEventListener('mouseleave', function(){
    rotation_l.style.display = 'none';
    rotation_r.style.display = 'none';
    timer = setInterval(function(){
        rotation_r.click();
    },2000)
})
//底部按钮 创建获取
for(let i =0 ; i<ul.children.length;i++){
    let ol_li= document.createElement('li');
    ol_li.setAttribute('index',i)
    ol.appendChild(ol_li);
    ol_li.addEventListener('click' , function(){
        for(let i =0 ;i<ol.children.length;i++){
            ol.children[i].style.backgroundColor=''
        }
        this.style.backgroundColor='red'
        //点击按钮 移动图片
        
        let index = this.getAttribute('index');
        num=ircle=index;
        
        animte(ul,-index*ul_width);
    })
}
//克隆第一个 左右箭头点击
let first_li = ul.children[0].cloneNode(true);
ul.appendChild(first_li);
rotation_r.addEventListener('click',function(){
    if(num==ul.children.length-1){
        ul.style.left=0;
        num=0;
    }
    num++; 
    circle=num
    animte(ul,-num*ul_width);
    circle++;
    if(circle==ol.children.length){
        circle=0;
    }
    for(let i =0 ;i<ol.children.length;i++){
        ol.children[i].style.backgroundColor=''
    }
    ol.children[circle].style.backgroundColor='red'
})
rotation_l.addEventListener('click',function(){
    if(num==0){
        ul.style.right=0;
        num=ul.children.length-1;
    }
    num--; 
    animte(ul,-num*ul_width);
})
let timer = setInterval(function(){
    rotation_r.click();
},2000)
