type Fn = (...args: any[]) => any;

export declare function charmprint<T extends Fn>(func: T): (...args: Parameters<T>) => ReturnType<T>;

export declare function createCharmedObject<T extends Record<string, any>>(obj: T): T;
