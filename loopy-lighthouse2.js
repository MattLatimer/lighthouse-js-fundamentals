function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    var output = "";
    if(i % multiples[0] === 0) {
      output = output + words[0];
    }
    if(i % multiples[1] === 0) {
      output = output + words[1];
    }
    if(output) {
      console.log(output);
    } else {
      console.log(i);
    }
  }
}
