// Convert any value to string
export default function anyToString(value) {
	try {
		return JSON.stringify(value) || String(value);
	} catch (error) {
		return `Error: ${error.message}`;
	}
}
