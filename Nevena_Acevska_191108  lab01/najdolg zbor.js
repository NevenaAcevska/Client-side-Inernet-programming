var niza=prompt("tekst");
var podelenaniza = niza.split(" ");
var najdolgzbor =" ";

    for(var i = 0; i < podelenaniza.length; i++){
        if(podelenaniza[i].length > najdolgzbor.length){
            najdolgzbor = podelenaniza[i];


        }
    }


   document.write(najdolgzbor);

