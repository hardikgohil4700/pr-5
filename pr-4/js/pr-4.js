function ASCII(array) {
    var asciiarr = [];
    for (var i = 0; i < array.length; i++) {
   
      var value = array[i].charCodeAt(0)
      asciiarr.push(value);
    }
    return asciiarr;
  }  
  var input = ["X", "Y", "Z"];
  var Result = ASCII(input);
  document.querySelector("h1").innerHTML=( input);
  document.querySelector("h2").innerHTML=( Result);
  