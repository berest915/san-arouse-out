import React from 'react';
import { MainCardContainer } from '../commonStylesCss';
import { Card, ImageDiv, ContentDiv } from './StyledCss';
import portfolio from '../../img/portfolio.png';

const ThirdMainCardContainer = () => {
	const cards = [
		{
			image: portfolio,
			alt: 'portfolio',
			title: 'Portfolio',
			p: `I wanted to build a porfolio to showcase my skills, experience and
			show some of my work, rather than just type over a resume. This
			site is build using Gatsby due to it's several benefits. I was
			able to add multiple contents and use Gatsby’s internal GraphQL
			API to pull content into my templates.`,
			stack: 'React - Styled-Components',
			demoUrl: 'https://www.google.com',
			sourceUrl: 'https://www.github.com',
		},
		{
			image: portfolio,
			alt: 'portfolio',
			title: 'Project-2',
			p: `[P2] I wanted to build a porfolio to showcase my skills, experience and
			show some of my work, rather than just type over a resume. This
			site is build using Gatsby due to it's several benefits. I was
			able to add multiple contents and use Gatsby’s internal GraphQL
			API to pull content into my templates.`,
			stack: 'Reagoogle.comct - Styled-Components',
			demoUrl: 'https://www.google.com',
			sourceUrl: 'https://www.github.com',
		},
		{
			image: portfolio,
			alt: 'portfolio',
			title: 'Project-3',
			p: `[P3] I wanted to build a porfolio to showcase my skills, experience and
			show some of my work, rather than just type over a resume. This
			site is build using Gatsby due to it's several benefits. I was
			able to add multiple contents and use Gatsby’s internal GraphQL
			API to pull content into my templates.`,
			stack: 'React - Styled-Components',
			demoUrl: 'https://www.google.com',
			sourceUrl: 'https://www.github.com',
		},
	];

	return (
		<>
			<MainCardContainer pad='major'>
				{cards.map(card => (
					<Cardz key={card.title} card={card} />
				))}
			</MainCardContainer>
		</>
	);
};
export default ThirdMainCardContainer;

const Cardz = ({ card }) => {
	const { image, alt, title, p, stack, demoUrl, sourceUrl } = card;
	return (
		<Card rowReverse>
			<ImageDiv className='w-46 left'>
				<img src={image} alt={alt} />
			</ImageDiv>
			<ContentDiv className='w-46 content'>
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
		</Card>
	);
};

// {/* <Card>
// 	<ImageDiv className='w-46 right'>
// 		<img src={portfolio} alt='portfolio' />
// 	</ImageDiv>
// 	<ContentDiv className='w-46 content'>
// 		<h2 className='h'>Portfolio</h2>
// 		<p>
// 			I wanted to build a porfolio to showcase my skills, experience and
// 			show some of my work, rather than just type over a resume. This
// 			site is build using Gatsby due to it's several benefits. I was
// 			able to add multiple contents and use Gatsby’s internal GraphQL
// 			API to pull content into my templates.{' '}
// 		</p>
// 		<h5 className='h'>React - Styled-Components</h5>
// 		<div className='card-link'>
// 			<a target='_blank' href='google.com' rel='noreferrer'>
// 				<i
// 					style={{ marginRight: '8px' }}
// 					className='fas fa-desktop'
// 				></i>
// 				<span>Demo</span>
// 			</a>
// 			<a target='_blank' href='google.com' rel='noreferrer'>
// 				<i style={{ marginRight: '5px' }} className='fab fa-github'></i>
// 				<span>Source</span>
// 			</a>
// 		</div>
// 	</ContentDiv>
// </Card>
// <Card>
// 	<ImageDiv className='w-46 left'>
// 		<img src={portfolio} alt='portfolio' />
// 	</ImageDiv>
// 	<ContentDiv className='w-46 content'>
// 		<h2 className='h'>Portfolio</h2>
// 		<p>
// 			I wanted to build a porfolio to showcase my skills, experience and
// 			show some of my work, rather than just type over a resume. This
// 			site is build using Gatsby due to it's several benefits. I was
// 			able to add multiple contents and use Gatsby’s internal GraphQL
// 			API to pull content into my templates.{' '}
// 		</p>
// 		<h5 className='h'>React - Styled-Components</h5>
// 		<div className='card-link'>
// 			<a target='_blank' href='google.com' rel='noreferrer'>
// 				<i
// 					style={{ marginRight: '8px' }}
// 					className='fas fa-desktop'
// 				></i>
// 				<span>Demo</span>
// 			</a>
// 			<a target='_blank' href='google.com' rel='noreferrer'>
// 				<i style={{ marginRight: '5px' }} className='fab fa-github'></i>
// 				<span>Source</span>
// 			</a>
// 		</div>
// 	</ContentDiv>
// </Card> */}
