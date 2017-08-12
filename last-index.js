function lastIndexOf(array, value) {
  var lastIndex = -1
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      lastIndex = i;
    }
  }
  return lastIndex;
}
