import React from 'react';
import Card from './Card';
import {
	SearchResultContainer,
	Spinner,
	SearchWrapContainer,
} from '../ui/SearchUI';
import { GiFlameSpin } from 'react-icons/gi';

const SearchResult = ({ characters, loading, error }) => {
	return (
		<SearchWrapContainer>
			{!error && loading ? (
				<Spinner>
					<GiFlameSpin />
				</Spinner>
			) : (
				<SearchResultContainer>
					{characters.map(character => {
						return <Card key={character.id} character={character} />;
					})}
				</SearchResultContainer>
			)}
		</SearchWrapContainer>
	);
};

export default SearchResult;
