let myclor = ["red", "green", "white", "black"];

document.querySelector("h1").innerHTML=(myclor.join(','));
document.querySelector("h2").innerHTML=(myclor.join('+'));
document.querySelector("h3").innerHTML=(myclor.pop());
document.querySelector("h3").innerHTML=(myclor);
document.querySelector("h4").innerHTML=(myclor[0]);
document.querySelector("h5").innerHTML=(myclor.slice(1,3));
myclor.push("orange")
document.querySelector("h6").innerHTML=(myclor.pop(','));


