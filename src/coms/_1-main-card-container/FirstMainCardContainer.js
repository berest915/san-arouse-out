import React from 'react';

//! styled-components
import { MainCardContainer } from '../commonStylesCss';
import { CoverPageText, Text } from './StyledCss';

const FirstMainCardContainer = () => {
	return (
		<>
			<MainCardContainer enCoverImage pad='minor' darker={true}>
				<CoverPageText>
					<Text variant='one'>Arouse-Out Studio</Text>
					<Text variant='two'>Welcome</Text>
					<Text variant='three'>Novice React-Dev to be Hired</Text>
				</CoverPageText>
			</MainCardContainer>
		</>
	);
};

export default FirstMainCardContainer;
