

let a =document.getElementById("monDiv");
console.log(a);
for(let i = 0; i <51; i++){
    if (i<19){
        a.innerHTML += i + " ans " + "le capitaine est jeune" + "<br><br>";
    }
    else if (i>18 && i<50){
        a.innerHTML += i+ " ans " + "le capitaine n'est pas tres vieux" + "<br><br>";
    }
    else if (i>49){
        a.innerHTML += i+ " ans " + "le capitaine est vieux" + "<br><br>";
    }
}













