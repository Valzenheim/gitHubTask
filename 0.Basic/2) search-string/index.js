function searchString(obj) {
	var keys = Object.keys(obj);
	return keys.length ? '?' +  keys
		.reduce(function(a, k){
			Boolean(obj[k]) || obj[k] === 0 || obj[k] === false ? a.push(k + '=' + encodeURIComponent(obj[k])) : null;
			return a;
		}, []).join('&') : '';
}

window.searchString = searchString;

export default searchString;
