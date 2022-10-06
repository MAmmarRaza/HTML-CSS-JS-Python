//85        window object methods: innerHeight() and outerHeight    
/*
var iheight=window.innerHeight;
console.log("Inner Height : " + iheight);

var oheight=window.outerHeight;
console.log("Outer Height : " + oheight);
*/
/*
document.getElementById("main").onresize=resizeFunction;
function resizeFunction(){
    console.clear();
    var iheight=window.innerHeight;
    console.log("Inner Height : " + iheight);

    var oheight=window.outerHeight;
    console.log("Outer Height : " + oheight);
}
*/
//       window object methods: innerWidth() and outerWidth
/*
document.getElementById("main").onresize=resizeFunction;
function resizeFunction(){
    console.clear();
    var iWidth=window.innerWidth;
    console.log("Inner Width : " + iWidth);

    var oWidth=window.outerWidth;
    console.log("Outer Width : " + oWidth);
}
*/ 



//86        window object methods:  open() to open another window and close()
/*
var element;
document.getElementById("btn").onclick=openWindow;
function openWindow(){
    //window.open(); //window will open in blank page
    element=window.open("http://127.0.0.1:5500/javascript/DOM4(80).html","","width=500px,height=500px,left=100px,top=200px"); //window will open required website and will be pop out 
}

document.getElementById("btnc").onclick=closeWindow;
function closeWindow(){
    element.close();
}
*/


//87        moveBy()  &( focus() )&  moveTo() it only works in your own window not another
/*
var element;
document.getElementById("btn").onclick=openWindow;
function openWindow(){
    element=window.open("","","width=500px,height=500px,left=100px,top=100px"); //window will open required website and will be pop out 
    element.document.write("<p>This is my window</p>");
}
//close()
document.getElementById("btnc").onclick=closeWindow;
function closeWindow(){
    element.close();
}
//moveTo
document.getElementById("move").onclick=moveWindow;
function moveWindow(){
    element.moveTo(200,200);//left and right parameters
    element.focus();
}
//moveBy() see in web notes DOM to see the major difference between moveTo and moveBy()
document.getElementById("moveB").onclick=moveByWindow;
function moveByWindow(){
    element.moveBy(200,200);//left and right parameters
    element.focus();
}



//88        window object methods: resizeBy() and resizeTo()
document.getElementById("resizeW").onclick=resizeWindow;
function resizeWindow(){
    element.resizeTo(400,400);//width and height parameters
}
//resizeBy() check differnce in web notes
document.getElementById("resizeWB").onclick=resizeByWindow;
function resizeByWindow(){
    element.resizeBy(100,100);//width and height parameters
}
*/

//89        window Object Method: scrollTo & scrollBy //check web notes scroll() methods
//vertical scroll bar y axis; horizontal scroll bar x axis, if you want scroll bar should go up then give negative values otherwise positive as we often used, similarly if you want to go right give positive values
// scrollTo will go to 1000px if it is already there then it will not move, 
/*
document.getElementById("scrol").onclick=scrollWindow;
function scrollWindow(){
    window.scrollTo(0,0);//x-axis and y-axisparameters
}

//scrollBy
document.getElementById("scrolB").onclick=scrollByWindow;
function scrollByWindow(){
    window.scrollBy(0,1000);//x-axis and y-axisparameters
}
//we can also use x axis where we define width in a div
*/