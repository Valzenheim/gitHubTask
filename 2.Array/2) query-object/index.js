function queryToObject(query) {
	let qstr = decodeURIComponent(query).slice(1).split(/[=&]/);
	let myObj = {};
	let keys = [];
	let data = [];

	for (let i = 0; i < qstr.length; i++) {

		if (i % 2 != 0) {
			String(qstr).match(/[0-9]/) || String(qstr).match('true') || String(qstr).match('false')?data.push(JSON.parse(qstr[i])):data.push(qstr[i])

		} else {
			keys.push(qstr[i])
		}
		for (let j = 0; j < data.length; j++) {
			myObj[keys[j]] = data[j];
		}

	}


	return myObj;
};

window.queryToObject = queryToObject;

export default queryToObject;
