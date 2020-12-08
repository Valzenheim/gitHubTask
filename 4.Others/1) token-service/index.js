/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */
const TOKEN_LS_KEY = '__token__';

class TokenService {

	constructor() {
		this.cbs = [];
	}

	// hasToken() {
	// 	return !!this.getToken();
	// }

	setToken(token) {
		localStorage.setItem(TOKEN_LS_KEY, token);
	}

	getToken() {
		return localStorage.getItem(TOKEN_LS_KEY)
	}

	removeToken() {
		localStorage.removeItem(TOKEN_LS_KEY);
		this.fireChangeEvent(null);
	}

	fireChangeEvent(token) {
		this.cbs.forEach(cb => cb(!!token));
	}

	subscribe(cb) {
		this.cbs.push(cb);
	}

}

window.TokenService = TokenService;

export default TokenService;
