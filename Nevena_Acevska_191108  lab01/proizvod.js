var broevi=prompt("Vnesete 3 broja");

var podelenaniza = broevi.split(', ');
var pozitivni=0;
var negativni=0;

for(var i=0;i<podelenaniza.length;i++){


    if(podelenaniza[i]>0){
        pozitivni++;}
    else if(podelenaniza[i]<0){
        negativni++;
    }
    else if(podelenaniza[i]==0){
        document.write("Nema znak, proizvodot e 0");
        break;
    }
}
if(pozitivni==3||negativni==2){
    document.write(" Знакот е +");
}
else if(negativni=1||negativni==3){
    document.write(" Знакот е -");
}
