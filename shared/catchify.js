
export default function catchify(promise) {
	return Promise.resolve(promise)
		.then(onThen, onCatch);
}

function onThen(response) {
	return [null, response];
}

function onCatch(err) {
	return [err, null];
}
