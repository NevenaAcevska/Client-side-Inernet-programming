var mobilenbroj=prompt("Vnesete mobilen broj");
mobilenbroj=parseInt(mobilenbroj);
var prvdel;
var vtordel;
var tretdel;

prvdel=parseInt(mobilenbroj/1000000);
vtordel=parseInt(mobilenbroj%1000000/1000);
tretdel=parseInt(mobilenbroj%1000);
if(parseInt(tretdel/100)==0&&parseInt(vtordel/100)==0){
    document.write("0"+prvdel+"/0"+vtordel+"-"+"0"+tretdel);
}
else if(parseInt(tretdel/100)==0){
    document.write("0"+prvdel+"/"+vtordel+"-"+"0"+tretdel);
}
else if(parseInt(vtordel/100)==0){
    document.write("0"+prvdel+"/0"+vtordel+"-"+tretdel);
}
else{
    document.write("0"+prvdel+"/"+vtordel+"-"+tretdel);
}

if(prvdel==70||prvdel==71||prvdel==72){
    document.write(" T-mobile ");
}
else if(prvdel==75||prvdel==76){
    document.write(" One ");
}
else if(prvdel==77||prvdel==78){
    document.write(" Vip ");
}