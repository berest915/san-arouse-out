import React from 'react'
import {
  Nav,
	Logo,
	LeftFlex,
  MidFlex,
  RightFlex,
} from './NavbarCss';

const Navbar = () => {
  return (
    <>
      	<Nav>
					<LeftFlex>
						<Logo className='fab fa-accusoft'></Logo>
						SAn @Arouse
					</LeftFlex>
          <MidFlex >
            <div>Resume</div>
            <div>Contact</div>
          </MidFlex>
					<RightFlex>
          <Logo className="fas fa-language"></Logo><span>LANG</span>
					</RightFlex>
				</Nav>
    </>
  )
}

export default Navbar
