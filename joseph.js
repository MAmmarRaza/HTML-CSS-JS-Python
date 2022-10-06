// for(var i=0;i<10;i++){
//     var tag=document.createElement("p");
//     var text=document.createTextNode("Tutorial is the best learing");
//     tag.appendChild(text);
//     var element=document.getElementById("new");
//     element.appendChild(tag);
// }

function calculate(){  
    var data=parseInt(document.getElementById("text").value);
    //document.write(data)
    while(data!=0){
        var tag=document.createElement("tr");
        var text=document.createTextNode(data);
        tag.appendChild(text);
        var element=document.getElementById("row");
        element.appendChild(tag);
        data=data-2;
    }
}

// function calculate(){  
//     //var data=parseInt(document.getElementById("text").value);
//     var data=8
//     while(data!=0){
//         var element=document.getElementById("table1").innerHTML="<tr><td>Ammar Raza</td><tr>";

//         data=data-2;
//     }
// }




