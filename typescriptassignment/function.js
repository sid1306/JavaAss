function array(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i])
            min = arr[i];
        if (max < arr[i])
            max = arr[i];
        sum += arr[i];
    }
    console.log(min);
    console.log(max);
    console.log(Math.floor(sum / arr.length));
}
var min = 100;
var max = 0;
var sum = 0;
var numbers = [100, 20, 333, 44, 578, 60];
array(numbers);
