for (var i = 100; i <= 200; i++) {
  var output = "";
  if(i % 3 === 0) {
    output = output + "Loopy";
  }
  if(i % 4 === 0) {
    output = output + "Lighthouse";
  }
  if(output) {
    console.log(output);
  } else {
    console.log(i);
  }
}
