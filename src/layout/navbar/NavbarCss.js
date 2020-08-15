import styled, { css } from 'styled-components';

//* extract css constants
import { NAV_COLOR } from '../../const/css-constant';
const { NAV_BG, NAV_FONT_COLOR } = NAV_COLOR;

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
		&:hover {
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

//! defaults
const NavbarCss = {};
export default NavbarCss;
