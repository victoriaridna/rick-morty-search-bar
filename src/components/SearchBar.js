import React from 'react';
import { FaSearchengin } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { SearchBarContainer, SearchIcon, SearchInput } from '../ui/SearchUI';

const SearchBar = ({ search, value }) => {
	return (
		<SearchBarContainer>
			<SearchIcon>
				<FaSearchengin />
			</SearchIcon>
			<SearchInput
				onChange={(e) => search(e.target.value)}
				value={value}
				placeholder="Search"
			/>
			<SearchIcon close>
				<MdClose onClick={() => search('')} />
			</SearchIcon>
		</SearchBarContainer>
	);
};

export default SearchBar;
