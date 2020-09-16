function show(areaDom,options){
    var imgAre=document.createElement('div');/*图片区域的div*/
    var numberAre=document.createElement('div');/*角标区域的div*/
    var curIndex=0;

    /*创建一个区域显示照片*/
    initImgs();
    function initImgs() {
        imgAre.style.width='100%';
        imgAre.style.height='100%';
        imgAre.style.display='flex';
        for(var i=0;i<options.length;i++){
            var obj=options[i]
            var img=document.createElement('img');
            img.src=obj.imgUrl;
            img.style.width='100%';
            img.style.height='100%';
            img.style.left='0';
            imgAre.appendChild(img);
        }


        areaDom.appendChild(imgAre);
    }

    initNumber();
    function initNumber() {
        numberAre.style.textAlign='center';
        numberAre.style.marginTop='-1.2rem';
        for( let  i=0;i<options.length;i++){
            var sp=document.createElement('span');
            sp.style.height='0.1rem';
            sp.style.width='0.1rem';
            sp.style.borderRadius='50%';
            sp.style.background='lightgrey';
            sp.style.display='inline-block';/*把普通的行盒设置为行块盒，这样才可以设置宽高*/
            sp.style.marginLeft='0.1rem';
            sp.addEventListener('click',function () {
                curIndex=i;
                setStatus();
            })
            numberAre.appendChild(sp);
        }
        areaDom.appendChild(numberAre);
    }

    /*设置区域的状态*/

    /*设置角标的颜色*/
    setStatus();
    function setStatus() {
        for(let i=0;i<options.length;i++){
            if(i==curIndex){
             numberAre.children[i].style.background='#be926f';
            }else {
                numberAre.children[i].style.background='lightgrey';
            }
        }

        /*显示图片*/
        var targetMarginLeft=curIndex*-100;
        imgAre.children[0].style.marginLeft=targetMarginLeft+'%';
    }

    /*自动切换*/

    autochange();
     function autochange() {
        a=setInterval(function () {
            curIndex++;
            if(curIndex>2){
                curIndex=0
            }
            setStatus();
        },2000)
    }

}