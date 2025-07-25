export default function anyToString(value: any): string {
	if (typeof value === 'string') return value;
	try {
		return JSON.stringify(value) || String(value);
	} catch (error) {
		return `Error: ${(error as Error).message}`;
	}
}
