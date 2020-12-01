

let a =document.getElementById("monDiv");
console.log(a);
for(let i = 0; i <51; i++){
    if (i<18){
        a.innerHTML += i + " ans " + "le capitaine est jeune" + "<br><br>";
    }
    if (i>=18){
        a.innerHTML += i+ " ans " + "le capitaine n'est pas tres vieux" + "<br><br>";
    }
    if (i>49){
        a.innerHTML += i+ " ans " + "le capitaine est vieux" + "<br><br>";
    }
}













