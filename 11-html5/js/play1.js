//��ȡ�滭canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var centerX = 300;//��ԲԲ��x����
var centerY = 200;//��ԲԲ��y����
var centerRiuds = 50;//��Բ�뾶
var ballRadius = 10;//�ȴ���ת����뾶
//-------------���ùؿ�--------
var level;
if(parseInt(window.location.href.split("#")[1])){
    level = parseInt(window.location.href.split("#")[1]);
}else{
    level = 0;
}
//-------initNum��ת����������waitNum���ȴ���������speed��ת���ٶ�-----------
var levelArray = [
    {"initNum":3, "waitNum":5, "speed":200},
    {"initNum":4, "waitNum":8, "speed":180},
    {"initNum":5, "waitNum":5, "speed":160},
    {"initNum":3, "waitNum":5, "speed":140},
    {"initNum":4, "waitNum":8, "speed":120},
    {"initNum":5, "waitNum":5, "speed":100},
    {"initNum":6, "waitNum":7, "speed":90}
];
//----------------------------����ת����---------------------
var balls = []; //ת����
var balllen = levelArray[level].initNum;//����ת�������鳤��
var lineLen = 130;//���ô���Բ����ת����֮��ľ���
//����ת�����������ת�Ƕ�
for(var i=0;i<balllen;i++){
    var angle = (360/balllen)*(i+1);
    balls.push({"angle":angle,"numStr":""});
}
//----------------------���õȴ���---------------------
var waitballs = []; //�ȴ���
var waitOffset = 260;//���õȴ�������Ϸ��ľ���
var waitballlen = levelArray[level].waitNum;//���õȴ������鳤��
//���õȴ���������������ı�
for(var i=waitballlen;i>0;i--){
    waitballs.push({"angle":"","numStr":i});
}
//----------------------���Ƶȴ���---------------------
var waitx = centerX;//���Ƶȴ����X����
var waity = lineLen + waitOffset;//���Ƶȴ����Y����
//--------------------��ʼ����������--------------------
function init(deg){
    ctx.clearRect(0,0,900,800);
    big();
    drawball(deg);
    drawWait();
}
init(0);
//---------------------������ת�ٶ�----------------------------
setInterval(function(){
    ctx.clearRect(0,0,900,345);
    big();
    drawball(10);
},levelArray[level].speed);
//-----------------------------------�����м����---------------------
function big(){
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerRiuds, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.save();
    //---------------------------------���ƴ����м�ؿ���-----------------
    if(level==levelArray.length){
        level = levelArray.length-1;
    }
    var txt = (level  + 1) + "";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "60px sans-serif";
    ctx.strokeStyle = "#EED5B7";
    ctx.fillStyle = "#EED5B7";
    ctx.fillText(txt, centerX-2, centerY+5);
    ctx.strokeText(txt, centerX-2, centerY+5);
    ctx.restore();
}

//---------------------------- ����ת����--------------------
function drawball(deg){
    //console.log(balls);
    balls.forEach(function(e) {
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";//����ͼ�����
        e.angle = e.angle+deg;
        if(e.angle>=360){
            e.angle = 0;
        }
        //���ƴ���С��֮����߶�
        ctx.moveTo(centerX, centerY);
        var rad = 2 * Math.PI * e.angle / 360;
        var x = centerX + lineLen * Math.cos(rad);
        var y = centerY + lineLen * Math.sin(rad);
        ctx.strokeStyle = "black";
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.restore();
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
        if(e.numStr!="") {
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "15px sans-serif";
            ctx.strokeStyle = "#fff";
            ctx.fillStyle = "#fff";
            ctx.fillText(e.numStr, x, y);
            ctx.strokeText(e.numStr, x, y);
        }

    });
}

//-------------------------���Ƶȴ���--------------------------------
function drawWait(){
    //ctx.fillStyle="red";
    //ctx.fillRect(0,345,400,300);
    ctx.clearRect(0,345,900,400);
    waitballs.forEach(function(e) {
        ctx.moveTo(waitx, waity);
        ctx.beginPath();
        ctx.arc(waitx, waity, ballRadius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "15px sans-serif";
        ctx.strokeStyle = "#fff";
        ctx.fillStyle = "#fff";
        ctx.fillText(e.numStr, waitx, waity);
        ctx.strokeText(e.numStr, waitx, waity);
        waity += 3 * ballRadius;
    });
}
//-------------------������---------------------------
var state;//���ڳɹ���ʧ��
document.onclick = function(){
    if(waitballs.length==0) return;
    waity = lineLen + 200;
    drawWait();

    var ball = waitballs.shift();//�ȴ��򶥲��Ƴ�һ����������ֵ
    ball.angle = 90;//�����Ƴ��ĵȴ���ĽǶ�
    var faild = true;//�ɹ���ʧ������ѭ��
    //-----------�ж��Ƿ񴳹سɹ�-------------
    balls.forEach(function(e, index) {
        if(!faild) return;
        if(Math.abs(e.angle - ball.angle)/2 < 360 * ballRadius/ (lineLen*Math.PI)) {
            state = 0;
            faild = false;
        } else if(index === balls.length - 1
            && waitballs.length === 0) {
            faild = false;
            state = 1;
        }
    });

    balls.push(ball);//ת������������Ӹղ��Ƴ��ĵȴ���
    //���»��Ƶȴ���
    waity = lineLen + waitOffset;
    drawWait();
    drawball(0);
    if(state==0){
        alert("����ʧ��");
        window.location.href = "index1.html#"+level;
    }else if(state==1){
        alert("���سɹ�");
        level++;
        window.location.href = "index1.html#"+level;
    }
}