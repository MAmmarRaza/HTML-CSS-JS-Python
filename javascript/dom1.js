//class=62    Targetting Methods
/*
var element;
element=document;
console.log(element); // it will print out all the html in document or in website 

console.log(document.all); //in array type with index exampl
console.log(document.all[9]);//it will target tag at index 9

console.log(document.head); //it will get and give html of head tag

console.log(document.title); //it will get and return us title

console.log(document.body); //it will get and show us html of body

console.log(document.links); //it will get all links and give us all links present with index
console.log(document.links[5]);

console.log(document.images);

console.log(document.forms);

console.log(document.doctype); //it will return us the doctype and we can check which version of html client used

console.log(document.baseURI); // it will return url like an example https://www.ntu.edu.pk 

console.log(document.domain); //ntu.com for ntu website

console.log(document.getElementById("header"));
console.log(document.getElementsByClassName("menu"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div")[5]);
*/


/**********************************************************************************************************************************/


//class=63       Get Methods
/*
console.log(document.getElementById("header").innerText); //innerText
console.log(document.getElementsByTagName("div")[1].innerText);
console.log(document.getElementById("header").innerHTML); //innerHTML

console.log(document.getElementById("header").getAttribute("class")); //getAttribute("")
console.log(document.getElementById("header").getAttribute("onclick")); //getAttribute("")
console.log(document.getElementById("header").getAttributeNode("class")); //getAttributeNode("")
console.log(document.getElementById("header").getAttributeNode("class").value); //value gives just value
console.log(document.getElementById("header").attributes); //getAttributeNode("")
                   Set Methods
*/
//document.getElementById("header").innerText="wow"; //innerText
//document.getElementById("header").innerHTML="<h1>wow</h1>"; //innerHTML
//document.getElementById("header").setAttribute("style","background-color: blue;"); //setAttribute
//document.getElementById("header").attributes[0].value="xy"; //
//document.getElementById("header").removeAttribute("style"); //remove attribute will remove attribute


/*************************************************************************************************************************************** */


//class=64   querySelector and querySelectorAll it work same like getElementById or class or tagname but instead of using all these we can save time by using it
/*
console.log(document.querySelector("div")); //it will target just first selector
console.log(document.querySelectorAll("div")); //it will target just all selectors
console.log(document.querySelector("#header").innerText); //it will target just first selector
console.log(document.querySelector(".content").innerText); //it will target just first selector
*/

/****************************************************************************************************************************************************** */


//class=65   style className and classList methods for styling css using js
/*
//style          get attribute using style
console.log(document.querySelector("img").style.float);
//              set attribute using style
document.querySelector(".content").style.backgroundColor = "yellow";
//className       get and set class name
console.log(document.querySelector("#header").className);
document.querySelector("#header").className = "xy"; //xy class has background color mahroon
//classList
console.log(document.querySelector("#header").classList= "xy abc");
console.log(document.querySelector("#header").className);
console.log(document.querySelector("#header").classList);
//          Add class
document.querySelector("#header").classList.add("tuv","efg");
//          remove class
document.querySelector("#header").classList.remove("tuv","efg");
*/



//class=66     addEventListener


/*
document.querySelector("#header").onmouseleave = def; //on clicking function will be called
function def(){
    document.querySelector("#header").style.backgroundColor = "yellow";
}
// now addEventListner
document.querySelector(".content").addEventListener("click",function(){
    this.style.backgroundColor = "yellow"; //this can be used other than document.queryselector(".content")
});             
//  use capture
document.querySelector(".content").addEventListener("dblclick",function(){
    alert("Outer Div"); 
},false);
document.querySelector(".inner").addEventListener("dblclick",function(){
    alert("Inner Div"); 
},true);        // true will be called first but: // by default first inner div will be called then out div but if we place use capture both in outer and inner div true then first outer div will be called then inner div, default value is false on both
//              removeEventListener
document.querySelector("#header").addEventListener("click", remo);
function remo(){
    document.querySelector("#header").removeEventListener("mouseleave",def);
}
*/


//Class=67     DOM classList() Methods

//document.querySelector("#header").classList.add("tuv","efg");
//document.querySelector("#header").classList.remove("tuv","efg");
//console.log(document.querySelector("#header").classList.length);
//toggle on click it will add class and on ragain clicking it will remove class
/*document.querySelector("#header").addEventListener("click",tog);
function tog(){
    document.querySelector("#header").classList.toggle("xy");
    console.log(document.getElementById("header").classList.item(1)); // item(index)
}*/
//console.log(document.querySelector("#header").classList.contains("uvw")); //contains will return true or false if class exist in braces("class")






















