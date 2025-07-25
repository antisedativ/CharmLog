import type { CharmprintFunction, CharmedObject } from '../types/index';

export function charmprint<T extends any[] = any[], R = any>(func: CharmprintFunction<T, R>): CharmprintFunction<T, R> {
	return function (this: any, ...args: T): R {
		const result = func.apply(this, args);
		if (typeof result === 'string') {
			console.log(`${result}`);
		}
		return result;
	};
}

export function createCharmedObject(obj: CharmedObject): CharmedObject {
	return new Proxy(obj, {
		get(target: CharmedObject, property: string | symbol, receiver: any): any {
			const origMethod = target[property as string];
			if (typeof origMethod === 'function') {
				return charmprint(origMethod).bind(target);
			}
			return Reflect.get(target, property, receiver);
		},
	});
} 