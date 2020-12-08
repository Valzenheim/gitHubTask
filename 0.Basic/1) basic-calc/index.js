function basicCalc(operation, a, b) {
	switch(operation){
		case '-' :
			return a-b;
			break;
		case '+' :
			return a+b;
			break;
		case '/' :
			return a/b;
			break;
		case '*' :
			return a*b;
			break;
	}
}

window.basicCalc = basicCalc;

export default basicCalc;
