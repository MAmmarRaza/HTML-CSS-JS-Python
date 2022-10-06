//72        createElement("tag you want to creat"),createTextNode("text here"), createComment("comment goes here")
/*
var newElement= document.createElement("h2"); 
console.log(newElement);

var newElement1= document.createTextNode("this is just text"); 
console.log(newElement1);

var newElement2= document.createComment("this is comment"); 
console.log(newElement2);
*/

//73            appendChild & insertBefore to attach a paragraph to any tag
/*
var newElement= document.createElement("h2"); 
var newElement1= document.createTextNode("this is just text"); 
var newElement2= document.createComment("this is comment"); 

newElement.appendChild(newElement1); //it will append this is just text in h2 tag
console.log(newElement);

document.getElementById("test").appendChild(newElement); //in div <h2> this is just text </h2> will be appended but at last
document.getElementById("test").appendChild(newElement2); //comment will be show in inspect mode
//          insertBefore(what to append, where to append)
//document.getElementById("test").insertBefore(newElement,document.getElementById("test").childNodes[0]);
*/



//74            insertAdjacentElement create an html tag and also create, while if we want tag with text in it then use insertAdjacentHTML, while for simple text we use insertAdjacentText
// positions:  beforebegin , afterbegin, beforeend, afterend
/*
var element=document.createElement("h2");
var elem2=document.createTextNode("this is just text");
element.appendChild(elem2);
var target=document.getElementById("test");
//target.insertAdjacentElement("beforebegin",element); //first parameter is position second is what to append
//target.insertAdjacentElement("afterbegin",element); //first parameter is position second is what to append
*/

//now following will reduce our time of not writting above things
/*
var target=document.getElementById("test");
var element="<h2>this is heading</h2>"
target.insertAdjacentHTML("beforeend",element); //first parameter is position second is what to append
*/
// following is for just text append and create
/*
var target=document.getElementById("test");
var element="this is heading";
target.insertAdjacentText("afterend",element); //first parameter is position second is what to append
*/



//75          replaceChild and removeChild
/*
var element=document.createElement("li");
var newText=document.createTextNode("Wow new text");

element.appendChild(newText);
var target=document.getElementById("list");
var oldElement=target.children[0];
target.replaceChild(element,oldElement);
var oldElement1=target.children[1];
target.replaceChild(element,oldElement1);
*/



//76            cloneNode Method
/*
var target=document.getElementById("list").children[0];
var copyElement=target.cloneNode(true);                     //false by default will just take attributes and tag but not content while true will take all things

document.getElementById("list2").appendChild(copyElement);
document.getElementById("test").appendChild(copyElement);
*/



//77       contains() to find children exist or not and result us in true or false
/*
var parentElement=document.getElementById("test");
var target=document.getElementById("para"); 
var find=parentElement.contains(target);
console.log(find);
*/



//78       work on Id just, dont know why?  hasAttribute()  gives true or false if that tag or id has another attribute too
/*
var target=document.getElementById("test");
var find=target.hasAttribute("class");
console.log(find);
*/
            //hasChildNodes()   did not understand
/*
var target1=document.getElementById("test");
var find1=target1.hasChildNodes();
console.log(find1);
*/


//79        isEqualaNode()  to compare list and list1 and return true and false if both are equala
//criteria  NodeType should be same, if both are pararagraph then they should be paragraph , both shuold be lists
//criteria  Same node name li tag for both not li with para
//criteria  same node value like text node 
//criteria  same child nodes 
//criteria  same attribute
//criteria  same attribute value
/*
var target=document.getElementById("list").children[3];
var target1=document.getElementById("list2").children[1];
var equal=target.isEqualNode(target1);
console.log(equal);
//criteria checking same attribute. if both have same attribute but not its value then false. both comapared should be mirror images
var target=document.getElementById("list").children[1];
var target1=document.getElementById("list2").children[0];
var equal=target.isEqualNode(target1);
console.log(equal);
*/

         





















