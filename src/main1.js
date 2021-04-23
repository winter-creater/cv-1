let demo=document.querySelector("#demo"); //获取demo，querySelector()利用css选择器找到demo
// string是保存要展示的结果，string2是要缓存显示到屏幕上的结果
let string=`
你好，我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color:red;
}
`;
let string2='';
// string=string.replace(/\n/g,"<br>");
console.log("字符串长度："+string.length)
let n=-1;

// demo.innerHTML=string.substring(0,n);

let step=()=>{
    // console.log("1秒钟之后把n加1并显示")
    setTimeout(() => {
         //console.log("字符串下标"+n);  n=10时
        n=n+1;

        // if else可以用  ？ ： 表达式优化
        //    string2+=(string[n]=="\n"?"<br>":string[n]);   
        
        if(string[n]=="\n"){
            // 如果是回车，就不照搬，改成HTML认识的<br>
            string2+="<br>";   //  string2=string2+"<br>";简写
        }else{//如果不是回车，就照搬
           string2+=string[n];   // string2=string2+string[n];简写
        }
        demo.innerHTML=string2;
 
        console.log(string2)
        if(n<string.length){
            step();
        }else{
            return;
        }
        
    }, 100);
}

step();
