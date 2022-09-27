
document.getElementById("demo1").innerText = localStorage.getItem("playerone");
document.getElementById("demo2").innerText = localStorage.getItem("playertow");

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

function winner(r){
    if(r=="X"){
        localStorage.setItem('winner',localStorage.getItem("playerone")+' '+"winner")
        location.href = 'resulte.html';
    }

    else if(r=="0"){
        localStorage.setItem('winner',localStorage.getItem("playertow")+' '+"winner")
        location.href = 'resulte.html';
    }
}
let compt=0
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
            winner(b1)
            break
        }

        if(b1==b1 &&  b4==b1 && b7==b1 && b1!="" && b4!="" && b7!=""){
            winner(b1)
            break
        }

        else if(b1==b1 &&  b5==b1 && b9==b1 && b1!="" && b5!="" && b9!=""){
            winner(b1)
            break
        }

        else if(b4==b4 &&  b5==b4 && b6==b4 && b4!="" && b5!="" && b6!=""){
            winner(b4)
            break
        }

        else if(b7==b7 &&  b8==b7 && b9==b7 && b7!="" && b8!="" && b9!=""){
            winner(b7)
            break
        }

        else if(b7==b7 &&  b5==b7 && b3==b7 && b7!="" && b5!="" && b3!=""){
            winner(b7)
            break
        }

        else if(b3==b3 &&  b6==b3 && b9==b3 && b3!="" && b6!="" && b9!=""){
            winner(b3)
            break
        }

        else if(b2==b2 &&  b5==b2 && b8==b2 && b2!="" && b5!="" && b8!=""){
            winner(b2)
            break
        }
compt++;
        
    }

    if(compt == 81) {
    localStorage.setItem('winner',localStorage.getItem("playertow")+' '+"draw")
    location.href = 'resulte.html';
    }

}







