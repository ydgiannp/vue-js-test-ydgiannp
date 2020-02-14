// Input: mirror('---ccv')
// Output: ---ccvvcc---

// Input: mirror('avg')
// Output: avggva

function mirror(input_string){
	return input_string + input_string.split('').reverse().join('')
}

console.log("Input: mirror('---ccv')");
console.log('Output: ' + mirror('---ccv'));

console.log("Input: mirror('avg')");
console.log('Output: ' + mirror('avg'));