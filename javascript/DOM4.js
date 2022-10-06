//80 lecture:   Form Events: onfocus
/* with addEventListener Method
document.getElementById("fname").onfocus=focusFunctionWithoutThis;
function focusFunctionWithoutThis(){
    document.getElementById("fname").style.backgroundColor="black"; 
}

// without addEventListener

// when apply this in input function (see in input of lastname in html document) no need to apply id just this in funciton paranthesis is enough 
function focusFunctionWithThis(element){    //element is variable
    element.style.backgroundColor="gray"; 
}

//              Form Events: onblur to remove function when we did not focus

function blurFunction(element){    //element is variable
    element.style.backgroundColor=""; 
}
*/
//              input Event does not impliment on check box and select tag
//VIP
/*
document.getElementById("fname").oninput=inputFunction;
function inputFunction(){
    var x=this.value; 
    document.getElementById("test").innerHTML = x;
}
*/


//81        form events : onchange()==> value will be shown (ON LOSS FOCUS) in div when value input kr k chodi jay g
/*
document.getElementById("fname").onchange=changeFunction;
function changeFunction(){
    var x=this.value; 
    document.getElementById("test").innerHTML = x;
}
*/
//          form events :onselect(): when user have given some value and when he select then it will be called
/*
document.write("<h2>Try to drag the text after input</h2>");
document.getElementById("fname").onselect=selectFunction;
function selectFunction(){
    var x=this.value; 
    document.getElementById("test").innerHTML = x;
}
*/
//          form events :onsubmit(): it will be called when submitted button is clicked
/*
document.getElementById("sub").onsubmit=submitFunction;
function submitFunction(){
    var x=document.getElementById("fname").value;
    alert("hello" + " " + x);
}
*/
//          form events :invalid(): if user input something wrong to show message
/*
document.getElementById("fname").oninvalid=invalidFunction;
function invalidFunction(){
    alert("please fill the first name");
}
*/ 


//82           Animation: setInterval(functionName,milliseconds) for applying animationn  and clearInterval for stipping
/*
var a=0;
var Set=setInterval(animeFunction,500);
function animeFunction(){
    a=a+50;
    if(a==200){
        clearInterval(Set);
    }else{
        var target=document.getElementById("anime");
        target.style.marginLeft = a + "px";
    }
}
*/


//83        Animation:  setTimeout() just for one time run and to stop between time applied    clearTimeout() function will be used
/*
var a=0;
var Set=setTimeout(animeFunction,3000); //function will be run after 3 second
function animeFunction(){
        var target=document.getElementById("anime");
        target.style.backgroundColor = "yellow";
}
document.getElementById("btn").onclick=stopFunction;
function stopFunction(){
    clearTimeout(Set);
}
*/























