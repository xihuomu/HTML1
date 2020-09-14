let times = document.querySelector('.time');
let end =document.querySelector('.end')
let ends = document.querySelector('.ends').children;

getDate();
setInterval(getDate,1000);
outDate();
setInterval(outDate,1000);
function getDate(){
    let date = new Date();// 获取时间
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dates = date.getDate();
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    // console.log(hours)
    let arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
    let day = date.getDay();
    times.innerHTML='今天是:' + year + '年' + month + '月' + dates + '日' + arr[day] + hours + '时' + minutes + '分' + seconds+'秒' 
}
function outDate(){
    let nowDate = new Date();
    let endDate = new Date('2020/8/19 20:32:35');//结束时间
    let num = endDate.getTime()-nowDate.getTime();
    let leftd = Math.floor(num/(1000*60*60*24)) //计算天数
    let lefth = Math.floor(num/(1000*60*60)%24) //计算小时数
    let leftm = Math.floor(num/(1000*60)%60) //计算分钟数
    let lefts = Math.floor(num/1000%60);  //计算秒数
    end.innerHTML= '距离结束时间还有'+leftd +'天'+lefth+'时'+leftm+'分'+lefts+'秒'
    ends[0].innerHTML = lefth;
    ends[1].innerHTML = leftm;
    ends[2].innerHTML = lefts;
}
