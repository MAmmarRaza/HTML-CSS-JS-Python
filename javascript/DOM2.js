//68 lecture:       Traversal Methods: parentElement & parentNode
/*
//document.getElementById("inner").parentElement.style.backgroundColor="yellow";
var a=document.getElementById("inner").parentElement;
console.log(a);
document.getElementById("child-C").parentElement.style.backgroundColor="gray";
//parentNode
document.getElementById("inner").parentNode.style.backgroundColor="yellow";
var b=document.getElementById("main").parentNode;
console.log(b);
*/


//69        children & childNodes
/*
console.log(document.getElementById("inner").children);
console.log(document.getElementById("inner").children[2]);
document.getElementById("inner").children[2].style.backgroundColor="yellow";
console.log(document.getElementById("inner").childNodes); //childNodes can give you each and every thing present in inner div as children, even though space,comment,enter everything
document.getElementById("inner").childNodes[8].style.backgroundColor="yellow";
*/


//70        firstChild, lastChild, firstElementChild, lastElementChild
/*
console.log(document.getElementById("inner").firstElementChild);
console.log(document.getElementById("inner").lastElementChild);
console.log(document.getElementById("inner").childNodes); //childNodes form it you can learn next 2 functions that firstChild and lastChild is what
console.log(document.getElementById("inner").firstChild);
console.log(document.getElementById("inner").lastChild);
console.log(document.getElementById("child-C").firstChild);
*/


//71       nextElementSibling,nextSibling,previousElementSibling,previousSibling
/*
console.log(document.getElementById("child-C").nextElementSibling);
console.log(document.getElementById("child-C").previousElementSibling);
console.log(document.getElementById("inner").childNodes); //childNodes form it you can learn next 2 functions 
console.log(document.getElementById("child-C").nextSibling);
console.log(document.getElementById("child-C").previousSibling);
console.log(document.getElementById("child-E").nextElementSibling);
console.log(document.getElementById("child-E").previousElementSibling);
console.log(document.getElementById("child-head").nextElementSibling);
console.log(document.getElementById("child-head").previousElementSibling);// it will show null because there is no previous sibling to head
*/








