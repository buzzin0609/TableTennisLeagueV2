// @flow
import dataUrl from './dataUrl';
import type {IAjax} from "./IAjax";

class Ajax implements IAjax {
	request(url: string, method: string, data: any): Promise<*> {
		method = method || 'GET';

		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
					resolve(this.responseText);
				}
			});

			xhr.open(method, `${dataUrl}/${url}`);

			if (method === 'GET') {
				xhr.send();
			} else {
				xhr.setRequestHeader("content-type", "application/json");
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
