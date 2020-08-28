import { useState, useEffect } from 'react';

export const useDebounce = (value, wait = 1000) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, wait);

		return () => {
			clearTimeout(handler);
		};
	}, [value, wait]);

	return debouncedValue;
};
