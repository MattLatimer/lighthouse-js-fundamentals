function merge(a, b) {
  var merged = [];
  var i = 0;
  var j = 0;
  for (var c = 0; c < a.length + b.length; c++){
    if (a[i] !== undefined) {
      if (b[j] !== undefined) {
        if (a[i] < b[j]) {
          merged.push(a[i]);
          i++;
        } else {
          merged.push(b[j]);
          j++;
        }
      } else {
        merged.push(a[i]);
        i++;
      }

    } else {
      merged.push(b[j]);
      j++;
    }
  }
  return merged;
}
