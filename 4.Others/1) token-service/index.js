/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */
const TOKEN_LS_KEY = null;

class TokenService {

	constructor() {
		this.cbs = [];
	}

	setToken(token) {
		localStorage.setItem(TOKEN_LS_KEY, token);
		this.subscribe()
	}

	getToken() {
		return localStorage.getItem(TOKEN_LS_KEY) || null;
	}

	removeToken() {
		localStorage.removeItem(TOKEN_LS_KEY);
		this.fireChangeEvent(null);

	}

	fireChangeEvent(token) {
		this.cbs.forEach(ch => ch(token));
	}

	subscribe(cb) {
		 this.cbs.push(cb);
	}

}

window.TokenService = TokenService;

export default TokenService;
