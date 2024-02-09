// Convert any value to string
export default function anyToString(value) {
	if (typeof value === 'string') return value;
	try {
		return JSON.stringify(value) || String(value);
	} catch (error) {
		return `Error: ${error.message}`;
	}
}
