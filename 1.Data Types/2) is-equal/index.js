function isEqual(a, b) {
	if (JSON.stringify(a) === JSON.stringify(b) ) {
		if (JSON.stringify(a,(k, v)=>v===undefined?null:v) === JSON.stringify(b, (k, v)=>v===undefined?null:v)){
			return true
		}else{
			return false
		}
	} else {
		console.log('no');
		return false
	}
}

window.isEqual = isEqual;

export default isEqual;
