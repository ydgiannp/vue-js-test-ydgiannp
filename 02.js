function reverse(input_string){
	var array_string = input_string.split(" ")
	return array_string.reverse().join(" ")
}

console.log("Input: reverse('saya ingin makan nasi goreng')");
console.log('Output: ' + reverse('saya ingin makan nasi goreng'));
