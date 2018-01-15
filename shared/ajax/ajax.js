// @flow
import dataUrl from './dataUrl';
import type {IAjax} from "./IAjax";

class Ajax implements IAjax {
	request(url: string, method: string, data: any): Promise<*> {
		method = method || 'GET';

		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.open(method, `${dataUrl}/${url}`);

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === this.DONE) {
					if (xhr.status >= 200 && xhr.status < 400) {
						resolve(this.responseText);
					} else {
						alert('Network Error: ' + this.responseText);
						reject(this.responseText);
					}
				}
			});

			if (method === 'GET') {
				xhr.send();
			} else {
				xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
				xhr.send(data);
			}

		});
	}

	get(url: string): Promise<*> {
		return this.request(url, 'GET');
	}

	getJSON(url: string): Promise<*> {
		return this.request(url, 'GET')
			.then((data: any) => {
				return Promise.resolve(JSON.parse(data));
			});
	}

	post(url: string, data: any): Promise<*> {
		return this.request(url, 'POST', data);
	}
}

export default new Ajax();
