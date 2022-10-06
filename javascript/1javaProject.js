
let h,m,s,t;


var Set=setInterval(animeFunction,1000);
function animeFunction(){
    t=new Date();
    h=t.getHours();
    m=t.getMinutes();
    s=t.getSeconds();
        if(h>=0 && h<10){
            document.getElementById("hours").innerHTML="0"+h +" : " ;
        }else{
            document.getElementById("hours").innerHTML=h +" : ";

        }
        if(m>=0 && m<10){
            document.getElementById("minutes").innerHTML="0"+m +" : ";
        }else{
            document.getElementById("minutes").innerHTML=m +" : ";

        }
        if(s>=0 && s<10){
            document.getElementById("seconds").innerHTML="0"+s ;
        }else{
            document.getElementById("seconds").innerHTML=s ;
        }
}

let dt,dy,n;
n=new Date();
dt=n.toDateString();
document.getElementById("day").innerHTML=dt;