// @flow
/**
 * Description:
 */

export interface IAjax {
	request(url:string, method:string, data:any): Promise<*>;
	get(url:string): Promise<*>;
	getJSON(url:string): Promise<*>;
	post(url:string, data:any): Promise<*>;
}