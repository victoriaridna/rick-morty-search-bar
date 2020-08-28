import styled, { keyframes } from 'styled-components';

export const WrapContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Error = styled(WrapContainer)`
	color: #FE4343;
	align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export const InnerContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	margin: 50px auto;
`;

export const SearchBarContainer = styled.div`
	display: flex;
	background: #ffffff;
	box-shadow: 0 2px 6px rgba(57, 57, 57, 0.25);
	border-radius: 16px;
	height: 55px;
	padding: 24px;
	margin-bottom: 24px;
	position: relative;
`;

export const SearchInput = styled.input`
	border: none;
	background-color: #f3f3f3;
	border-radius: 8px;
	height: 55px;
	width: 100%;
	padding-left: 50px;
	outline: none;
	font-size: 16px;
	line-height: 19px;
`;

export const SearchIcon = styled.div`
	display: inline-flex;
	height: 24px;
	width: 24px;
	color: ${(props) => (props.close ? '#ffffff' : '#9d9fb0')};
	font-size: 14px;
	font-weight: bolder;
	position: absolute;
	z-index: 1;
	margin-left: 18px;
	margin-top: 16px;
	right: ${(props) => props.close && '40px'};
	background-color: ${(props) => props.close && '#613CE9'};
	border-radius: ${(props) => props.close && '50px'};
	svg {
		height: 100%;
		width: 100%;
	}
`;

export const SearchWrapContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px 0;
	height: 80%;
	border-radius: 16px;
`;

export const NoResults = styled(SearchWrapContainer)`
	color: #9d9fb0;
	font-size: 30px;
	align-items: center;
`;

export const SearchResultContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	overflow-y: scroll;
	justify-content: space-around;
`;

export const CardContainer = styled.div`
	height: 345px;
	padding: 15px 15px 0 15px;
	flex-direction: column;
	border-radius: 16px;
	background-color: #ffffff;
	box-shadow: 0 2px 8px rgba(57, 57, 57, 0.25);
	display: inline-flex;
	border-top: 5px solid #613ce9;
	align-items: center;
	flex-grow: 1;
  min-width: 200px;
  max-width: 309px;
  flex-basis: 25%;
  margin: 15px 10px;
  
`;

export const InfoContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100px;
`;

export const Image = styled.div`
	width: 100%;
	height: 222px;
	background-color: white;
	background-image: url(${(props) => props.image && props.image});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 16px;
`;

export const Title = styled.div`
	font-weight: ${(props) => (props.main ? '500' : '300')};
	font-size: ${(props) => (props.main ? '18px' : '16px')};
	line-height: ${(props) => (props.main ? '21px' : '19px')};
	margin-top: 10px;
`;

export const Status = styled.div`
	width: 80px;
	height: 24px;
	background-color: ${(props) =>
		props.status === 'Alive'
			? ' #0A9A32'
			: props.status === 'Dead'
			? '#FE4343'
			: '#999900'};
	border-radius: 6px 6px 0 0;
	display: flex;
	justify-content: center;
	font-size: 14px;
	line-height: 16px;
	color: #ffffff;
	align-items: center;
	text-transform: capitalize;
`;

export const SpinAnimation = keyframes`
	0% {
	    -webkit-transform: rotate(0deg);
	            transform: rotate(0deg);
	  }
	  100% {
	    -webkit-transform: rotate(359deg);
	            transform: rotate(359deg);
	  }
`;

export const Spinner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		animation: ${SpinAnimation} 1s infinite linear;
		fill: rgba(213, 211, 211, 0.97);
		width: 50px;
		height: 50px;
	}
`;
