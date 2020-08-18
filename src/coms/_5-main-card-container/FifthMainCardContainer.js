import React from 'react';

import {
	ReMainCardContainer,
	Wrapper,
	LeftContainer,
	RightContainer,
	I,
} from './StyledCss';

const FifthMainCardContainer = () => {
	return (
		<>
			<ReMainCardContainer pad='minor' darker={true}>
				<Wrapper>
					<LeftContainer>
						<div style={{ padding: '.8rem 0' }}>Bits and Pieces</div>
						<div>
							<I className='fas fa-greater-than'></I>
							<span>not to overstate your expertise</span>
						</div>
						<div>
							<I className='fas fa-greater-than'></I>
							<span>be honestly passionate about web development</span>
						</div>
						<div>
							<I className='fas fa-greater-than'></I>
							<span>know the essentials from your own observaions</span>
						</div>
					</LeftContainer>
					<RightContainer>
						{/*  react-icon % styled-components icon */}
						<p>
							【 REACT :: <span>Css-in-Js with Styled-Components 】</span>
						</p>
						<div className='middle-text'>
							<div className='name'>Leow Wei San</div>
							<strong className='position'>{text}</strong>
						</div>
						<div className='i-container'>
							<a href='#'>
								<i class='fab fa-github-square'></i>
							</a>
							<a href='#'>
								<i class='fab fa-facebook-square'></i>
							</a>
							<a href='#'>
								<i class='fab fa-linkedin'></i>
							</a>
						</div>
					</RightContainer>
				</Wrapper>
			</ReMainCardContainer>
		</>
	);
};

export default FifthMainCardContainer;

let text = '< Front-end Developer />';
