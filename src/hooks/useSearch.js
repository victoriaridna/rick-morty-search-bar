import { useState, useEffect } from 'react';

export const useSearch = ({ searchText }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		if (searchText) {
			setLoading(true);
			(async () => {
				try {
					const searchedName = searchText.trim();
					const fetchCharacters = await fetch(
						`https://rickandmortyapi.com/api/character/?name=${searchedName}`
					);
					const { results } = await fetchCharacters.json();
					setLoading(false);
					setCharacters(results);
				} catch (e) {
					setError(true);
					setLoading(false);
				}
			})();
		} else {
			setCharacters([]);
		}
	}, [searchText]);

	return { characters, loading, error };
};
