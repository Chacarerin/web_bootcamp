function upimagen(){

    $("#img").css("width", "150%");}
    
function downimagen(){
    $("#img").css("width", "20%");}

function subetexto() {
    $("#caja3").css("font-size","200%")}

    function downtexto() {
        $("#caja3").css("font-size","100%")}

$(document).ready(function () {
  var i=0, j=0;
    $("#text1").mouseenter(function () {
        $("#text2").toggle();
     })

    $("#img").click(function () {
        if(i==0){ upimagen(); i=1; }
        else{ downimagen(); i=0; }
        })

    $("#caja3").dblclick(function () {
        if(j==0){ subetexto(); j=1; }
        else{ downtexto(); j=0; }
        })
   
})