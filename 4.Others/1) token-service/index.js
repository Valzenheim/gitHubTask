/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */


class TokenService {

	constructor() {
		this.items = [];
		this.token = null;
		this.callback= null
	}

	setToken(token) {
		this.token=token
		this.callback ? this.callback(this.token) : null
	}

	getToken() {
		return this.token
	}

	removeToken() {
		this.token = null;
		this.callback ? this.callback(null) : null
	}



	subscribe(callback) {
		 this.callback = callback;
	}

}

window.TokenService = TokenService;

export default TokenService;
