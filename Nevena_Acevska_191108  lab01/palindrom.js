var broj=prompt("Vnesete tricifren broj");
broj=parseInt(broj);
var palindrom=0;
var temp=broj;
var cifra;

if(broj/100 < 1 || broj/100 >= 10)
{
    document.write("Ne mozhe da se proveri vneseniot broj!");
}
else{

        while(temp>=1)
    {
        cifra = temp%10;
        temp=temp/10;
        palindrom = parseInt(palindrom*10+cifra);
    }

    if(broj==palindrom){
        document.write("Vneseniot broj e palindrom!");
    }
    else {
        document.write("Vneseniot broj ne e palindrom!");
    }
}

