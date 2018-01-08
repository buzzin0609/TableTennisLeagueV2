// @flow
export default function ensureArray(item: any): Array<*> {
	return Array.isArray(item) && item || [item];
}