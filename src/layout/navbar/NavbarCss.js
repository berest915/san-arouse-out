import styled, { css } from 'styled-components';
import coverImage from './img/cover-image.jpg';

//? extract css constants
import { CARD_BG, CARD_PAD, NAV_COLOR } from './const/css-constant';
const { BG_DARKER, BG_LIGHTER } = CARD_BG;
const { PAD_MINOR, PAD_MAJOR } = CARD_PAD;
const { NAV_BG, NAV_FONT_COLOR } = NAV_COLOR;

//! css snipplets
const cssCoverImage = css`
	background-image: url(${coverImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;
//! main-nav
export const Nav = styled.nav`
	/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
	font-family: Roboto;
	color: ${NAV_FONT_COLOR};
	background-color: ${NAV_BG};
	z-index: 5;
	padding: 2vh 2%;
	width: 100%;
	max-height: 10vh;
	display: flex;
	position: fixed;
	& > * {
		font-weight: bold;
		padding: 0 1.5rem;
	}
	font-size: 1.2rem;
`;
export const LeftFlex = styled.div`
	display: inline-flex;
	flex: 1;
	align-items: center;
	font-size: 1.7rem;
	padding-right: 5rem;
`;
export const Logo = styled.i`
	font-size: 2rem;
	padding-right: 1rem;
`;
export const MidFlex = styled.div`
	display: flex;
	flex: 2;
	justify-content: space-evenly;
	align-items: center;
	& > * {
    color: ${NAV_FONT_COLOR};
    &:hover{
      color: white;
      text-decoration: none;
      
    }
  }
`;
export const RightFlex = styled.div`
	display: inline-flex;

	justify-content: space-evenly;
	align-items: center;
	padding-left: 5rem;
`;
//! main-container
export const MainCardContainer = styled.div`
	height: 100vh;
	max-height: 100vh;
	background-color: ${props => (props.darker ? BG_DARKER : BG_LIGHTER)};
	padding: ${props => (props.pad === 'minor' ? PAD_MINOR : PAD_MAJOR)};
	${props => props.enCoverImage && cssCoverImage}
`;
export const CoverPageText = styled.div`
	text-align: right;
	/* position: absolute; */
	/* top: 15%; */
	/* right: 0; */
	/* transform: translate(-50%, -50%); */
	color: black;
`;
export const Text = styled.h1`
	position: absolute;
	${props => {
		switch (props.variant) {
			case 'one':
				return `
        font-size: 5rem;
        top: 13%;
        right: 3%;
        color: rgb(112,128,144);
        `;
			case 'two':
				return `
        font-size: 3.5rem;
        top: 35%;
        right: 6%;color:white;  
        `;
			case 'three':
				return `
        font-size: 2.5rem;
        top: 50%;
        right: 3%;
        color: gray;
        `;
			default:
				return ``;
		}
	}}
`;
//! defaults
const NavbarCss = {};
export default NavbarCss;
