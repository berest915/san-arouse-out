import React from 'react';
import { Link } from 'react-router-dom';
//! styled-components
import { Nav, Logo, LeftFlex, MidFlex, RightFlex } from './NavbarCss';

const Navbar = () => {
	return (
		<>
			<Nav>
				<LeftFlex>
					<Logo className='fab fa-accusoft'></Logo>
					SAn @Arouse
				</LeftFlex>
				<MidFlex>
					<Link to='/'>
						<div>Resume</div>
					</Link>
					<Link to='/'>
						<div>Contact</div>
					</Link>
				</MidFlex>
				<RightFlex>
					<Logo className='fas fa-language'></Logo>
					<span>LANG</span>
				</RightFlex>
			</Nav>
		</>
	);
};

export default Navbar;
