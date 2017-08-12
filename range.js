function range(start, end, step) {
  var array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return array;
  }
  for(var i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
