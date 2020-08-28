import React from 'react';
import {
	CardContainer,
	Image,
	Title,
	InfoContainer,
	Status,
} from '../ui/SearchUI';

const Card = ({ character: { image, name, species, status } }) => {
	return (
		<CardContainer>
			<Image image={image} alt={name} />
			<InfoContainer>
				<Title main>{name}</Title>
				<Title>{species}</Title>
			</InfoContainer>
			<Status status={status}>{status}</Status>
		</CardContainer>
	);
};

export default Card;
