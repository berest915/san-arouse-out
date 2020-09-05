import styled, { css } from 'styled-components';

import { CARD_BG } from '../../const/css-constant';
const { CARD_LINK_COLOR } = CARD_BG;

//! css
const rightBoxShadow = css`
	-webkit-box-shadow: 7px 4px 36px -8px rgba(112, 100, 112, 0.55);
	-moz-box-shadow: 7px 4px 36px -8px rgba(112, 100, 112, 0.55);
	box-shadow: 7px 4px 36px -8px rgba(112, 100, 112, 0.55);
`;
const leftBoxShadow = css`
	-webkit-box-shadow: -7px -4px 36px -8px rgba(112, 100, 112, 0.55);
	-moz-box-shadow: -7px -4px 36px -8px rgba(112, 100, 112, 0.55);
	box-shadow: -7px -4px 36px -8px rgba(112, 100, 112, 0.55);
`;

//! styled
export const Card = styled.div`
	height: 50vh;
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${props => props.rowReverse && 'flex-direction: row-reverse'};
	.w-46 {
		width: 46%;
	}
	.right {
		${rightBoxShadow}
	}
	.left {
		${leftBoxShadow}
	}
`;
export const ImageDiv = styled.div`
	img {
		width: 100%;
		border: 1px solid black;
		border-radius: 8px;
	}
`;
export const ContentDiv = styled.div`
	font-family: Roboto 'san-serif';
	font-weight: 500;
	text-align: justify;
	.h {
		margin: 1rem 0;
	}
	.card-link {
		color: ${CARD_LINK_COLOR};
		display: flex;
		justify-content: space-between;
		width: 50%;
		margin-right: 50%;
		a {
			text-decoration: none;
		}
	}
`;
