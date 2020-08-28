import React, { useState } from 'react';
import SearchBar from 'components/SearchBar';
import SearchResult from './components/SearchResult';
import { WrapContainer, InnerContainer, Error, NoResults } from 'ui/SearchUI';
import { useSearch } from 'hooks/useSearch';
import { useDebounce } from 'hooks/useDebounce';

const Search = () => {
	const [searchText, setSearchText] = useState('');

	const handleSearchInput = (searchText) => setSearchText(searchText);

	const debouncedSearchText = useDebounce(searchText, 800);

	const { characters, loading, error } = useSearch({
		searchText: debouncedSearchText,
	});

	return (
		<WrapContainer>
			{!error ? (
				<InnerContainer>
					<SearchBar search={handleSearchInput} value={searchText} />
					{characters && characters.length ? (
						<SearchResult
							characters={characters}
							loading={loading}
							error={error}
						/>
					) : (
						<NoResults>No Search Results</NoResults>
					)}
				</InnerContainer>
			) : (
				<Error>Sorry current page is unavailable</Error>
			)}
		</WrapContainer>
	);
};

export default Search;
