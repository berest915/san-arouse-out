import styled, { css } from 'styled-components';
import coverImage from '../img/cover-image.jpg';

// // latter:: try put css-const in public folder
import { CARD_BG, CARD_PAD } from '../const/css-constant';
const { BG_DARKER, BG_LIGHTER } = CARD_BG;
const { PAD_MINOR, PAD_MAJOR } = CARD_PAD;

//! { css }
const cssCoverImage = css`
	background-image: url(${coverImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;
//! styled
//! main-container
export const MainCardContainer = styled.div`
	min-height: 100vh;
	background-color: ${props => (props.darker ? BG_DARKER : BG_LIGHTER)};
	padding: ${props => (props.pad === 'minor' ? PAD_MINOR : PAD_MAJOR)};
	${props => props.enCoverImage && cssCoverImage}
`;