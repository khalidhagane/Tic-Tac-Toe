

let item = 1;
function myfunc_prant(id) {
    if (item == 1 && document.getElementById(id).innerText == "") {
        document.getElementById(id).innerText= "X";
        item = 0;
    }
    else if (item == 0 && document.getElementById(id).innerText== "") {
        document.getElementById(id).innerText = "0";
        item = 1;
    }
}


function myfunction(){
    
    
        var  b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").innerHTML;
    b2 = document.getElementById("b2").innerHTML;
    b3 = document.getElementById("b3").innerHTML;
    b4 = document.getElementById("b4").innerHTML;
    b5 = document.getElementById("b5").innerHTML;
    b6 = document.getElementById("b6").innerHTML;
    b7 = document.getElementById("b7").innerHTML;
    b8 = document.getElementById("b8").innerHTML;
    b9 = document.getElementById("b9").innerHTML;

    let a = [b1,b2,b3,b4,b5,b6,b7,b8,b9]

    for(i=1;i<=a.length;i++){
        if(b1==b1 &&  b2==b1 && b3==b1 && b1!="" && b2!="" && b3!=""){
            
            setTimeout(function(){alert("nta kain ");},100)
            break;
        }
    }
}

