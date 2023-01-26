var score = document.getElementById("total-score");
var out = document.getElementById("total-out");
var inn = document.getElementById("totalInningScore")
var inningsscore= ["innings"];
inn.innerText= inningsscore;
var total=0;
var dugout=0;
function six(){
    total= total+6;
    score.innerText= total;
}
function four(){
    total= total+4;
    score.innerText= total;
}
function triple(){
    total= total+3;
    score.innerText= total;
}
function double(){
    total= total+2;
    score.innerText= total;
}
function single(){
    total= total+1;
    score.innerText= total;
}
function dot(){
    total= total+0;
    score.innerText= total;
}
function clear(){
    total=total+200;
    score.innerText= total;
}
function single1(){
    var result=  confirm('Are you sure you want to delete this team this action cannnot be reverted. Click OK to delete.');
    if (result == false){
        e.preventdefault();
    }
    inningsscore.push(total)
    inn.innerText = inningsscore

    total= total-total;
    dugout=dugout-dugout;
    score.innerText= total;
    out.innerText=dugout;


}
function outt(){
    dugout=dugout+1;
    out.innerText=dugout
}