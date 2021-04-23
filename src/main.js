let html=document.querySelector("#demo"); //获取demo，querySelector()利用css选择器找到demo
let style=document.querySelector("#style");

// string是保存要展示的结果，string2是要缓存显示到屏幕上的结果
let string=`
/*你好，我叫团仔
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加两个风火轮
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;


let string2='';
// string=string.replace(/\n/g,"<br>");
console.log("字符串长度："+string.length)
let n=0;

// demo.innerHTML=string.substring(0,n);

let step=()=>{
    // console.log("1秒钟之后把n加1并显示")
    setTimeout(() => {
         //console.log("字符串下标"+n);  n=10时
    
       
         if(string[n]=="\n"){
            // 如果是回车，就不照搬，改成HTML认识的<br>
            string2+="<br>";   //  string2=string2+"<br>";简写
        }else if(string[n]==" "){
            string2+="&nbsp;";
        } else{//如果不是回车，就照搬
           string2+=string[n];   // string2=string2+string[n];简写
        }       
        html.innerHTML=string2;
       style.innerHTML=string.substring(0,n);
       window.scrollTo(0,99999);//设置滚动条
    html.scrollTo(0,99999);//demo也要自己滚动，就可不用区分手机还是PC端

        // console.log(string2)
            // length 54
        if(n<string.length-1){
            // 如果n不是最后一个，就继续
            n+=1;//53
            step();
        }else{
            return;
        }
        
    },50);
}

step();
