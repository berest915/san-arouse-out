import React from 'react';
import { MainCardContainer } from '../commonStylesCss';

import { Cards } from './Cardz/Cards';
import Card from './Cardz/Card';

const ThirdMainCardContainer = () => {
	return (
		<>
			<MainCardContainer pad='major'>
				{Cards.map(card => (
					<Card key={card.title} card={card} />
				))}
			</MainCardContainer>
		</>
	);
};
export default ThirdMainCardContainer;
