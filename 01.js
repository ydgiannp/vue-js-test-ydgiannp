function grade(grade){
	if(grade >= 90){
		return 'A'
	}else if(grade >= 80){
		return 'B'
	}else if(grade >= 70){
		return 'C'
	}else if(grade >= 60){
		return 'D'
	}else{
		return 'E'
	}
}



console.log('Input: grade(30)');
console.log('Output: ' + grade(30));


console.log('Input: grade(75)');
console.log('Output: ' + grade(75));