function filterNumbersFromArray(arr) {
    // Write the code that goes here
    arr = arr.filter(item => typeof item == "number");
    return arr
  }
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
  