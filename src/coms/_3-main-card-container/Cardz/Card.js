import React from 'react'
import { Wrapper, ImageDiv, ContentDiv } from './StyledCss';

const Card = ({ card }) => {
	const { image, alt, title, p, stack, demoUrl, sourceUrl, isRowReverse } = card;
	return (
		<Wrapper isRowReverse={isRowReverse}>
			<ImageDiv className='w-46' isRowReverse={isRowReverse} >
				<img src={image} alt={alt} />
			</ImageDiv>
			<ContentDiv className='w-46 '>
				<h2 className='h'>{title}</h2>
				<p>{p}</p>
				<h5 className='h'>{stack}</h5>
				<div className='card-link'>
					<a target='_blank' href={demoUrl} rel='noopener noreferrer'>
						<i style={{ marginRight: '8px' }} className='fas fa-desktop'></i>
						<span>Demo</span>
					</a>
					<a target='_blank' href={sourceUrl} rel='noopener noreferrer'>
						<i style={{ marginRight: '5px' }} className='fab fa-github'></i>
						<span>Source</span>
					</a>
				</div>
			</ContentDiv>
		</Wrapper>
	);
};
export default Card