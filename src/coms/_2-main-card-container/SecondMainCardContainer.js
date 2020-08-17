import React from 'react';

//! styled-components
import { ReMainCardContainer, Container, LeftContainer, RightContainer, Card} from './StyledCss';

const SecondMainCardContainer = () => {
	return (
		<>
			<ReMainCardContainer pad='major' darker={false}>
			
					<Container>
						<LeftContainer>
							<Card>one</Card>
							<Card>two</Card>
							<Card>three</Card>
						</LeftContainer>
						<RightContainer>Info</RightContainer>
					</Container>
			
			</ReMainCardContainer>
		</>
	);
};

export default SecondMainCardContainer;

