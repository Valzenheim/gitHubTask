function xhrGet(url) {
	return new Promise( (resolve, reject)=> {
		let req = new XMLHttpRequest()
		req.open('GET', url)
		req.onload = ()=> {
			if (req.status >= 200 && req.status < 300) {
				try {
					const resp = JSON.parse(req.response);
					resolve(resp);
				} catch(err) {
					resolve(req.response);
				}
			} else {
				reject(JSON.parse(req.response))
			}
		}
		req.setRequestHeader("content-type", "application/json")
		req.send()
	})
}

window.xhrGet = xhrGet;

export default xhrGet;
