let div_element = document.getElementsByTagName("li");
let first="";
let second="";
let flag = true;
for(let i=0;i<div_element.length;i++){
    div_element[i].onclick=function(){
        // alert(this.innerHTML);
        // console.log(this.innerHTML);
        // first=first + this.innerHTML;
        // document.getElementById("one").value = first;
        
        if(this.innerHTML=="+"){
            first=document.getElementById("one").value;
            let hao = this.innerHTML;
            document.getElementById("one").value = "";
            return;
            flag=false;
        }
        // else if(this.innerHTML=="="){
        //     // first = parseFloat(first);
        //     // second = parseFloat(second);
        //     // document.getElementById("one").value=first+second;
        //     return;
        // }else{
        //     // second=second + this.innerHTML;
        //     // document.getElementById("one").value = second;
        //     // second=document.getElementById("one").value;
        // }
        else if(this.innerHTML == "="){
            document.getElementById("one").value = parseFloat(first) + parseFloat(second);
        }else{
            // document.getElementById("one").value += this.innerHTML;
            // let hao = this.innerHTML;
            // second=document.getElementsById("one");
            second=document.getElementById("one").value;
            let hao = this.innerHTML;
            document.getElementById("one").value = "";
            return;
        }
        
    }
}
