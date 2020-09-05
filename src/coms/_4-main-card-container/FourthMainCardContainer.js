import React from 'react';
import { MainCardContainer } from '../commonStylesCss';

//! styled-components
import { Wrapper, TimelineContainer, H3 } from './StyledCss'

//! lib component
import { Timeline, TimelineEvent } from 'react-event-timeline'


const FourthMainCardContainer = () => {
	return (
		<>
			<MainCardContainer pad='major' darker={false}>
			<>
			<Wrapper>
				<TimelineContainer borderRight={true}>
					<H3 align='left'>Skills</H3>
					<Timeline lineStyle={{padding: '1.5px'}}>
						<TimelineEvent
							icon={<i style={{'fontSize': '1.5rem'}} className='fab fa-html5'></i>}
							title='John Doe sent a SMS'
							createdAt='2016-09-12 10:06 PM'
							contentStyle={contentStyle}
							showContent={false}
						>
							I received the payment for $543. Should be shipping the item
							within a couple of hours.
						</TimelineEvent>
						<TimelineEvent
							icon={<i style={{'fontSize': '1.5rem'}} className='fab fa-css3-alt'></i>}
							title='John Doe sent a SMS'
							createdAt='2016-09-12 10:06 PM'
							contentStyle={contentStyle}
							showContent={false}
						>
							Can you expedite the process and pls do share the details asap.
							Consider this a gentle reminder if you are on track already!
						</TimelineEvent>
						<TimelineEvent
							icon={<i style={{'fontSize': '1.5rem'}} className='fab fa-js-square'></i>}
							title='John Doe sent a SMS'
							createdAt='2016-09-12 10:06 PM'
							contentStyle={contentStyle}
							showContent={false}
						>
							Can you expedite the process and pls do share the details asap.
							Consider this a gentle reminder if you are on track already!
						</TimelineEvent>
						<TimelineEvent
							icon={<i style={{'fontSize': '1.5rem'}} className='fab fa-react'></i>}
							title='John Doe sent a SMS'
							createdAt='2016-09-12 10:06 PM'
							contentStyle={contentStyle}
							showContent={false}
						>
							Can you expedite the process and pls do share the details asap.
							Consider this a gentle reminder if you are on track already!
						</TimelineEvent>
					</Timeline>
				</TimelineContainer>

				<TimelineContainer borderRight={false}>
					<H3 align='right'>Side Skills</H3>
					<Timeline orientation='right'  lineColor='black'>
						<TimelineEvent
							icon={<i style={{'fontSize': '1.5rem'}} className='fab fa-github'></i>}
							title='John Doe sent a SMS'
							createdAt='2016-09-12 10:06 PM'
							contentStyle={contentStyle}
							showContent={false}
						>
							I received the payment for $543. Should be shipping the item
							within a couple of hours.
						</TimelineEvent>
						<TimelineEvent
							icon={<i style={{'fontSize': '1rem'}} className='fas fa-users-cog'></i>}
							title='John Doe sent a SMS'
							createdAt='2016-09-12 10:06 PM'
							contentStyle={contentStyle}
							showContent={false}
						>
							Can you expedite the process and pls do share the details asap.
							Consider this a gentle reminder if you are on track already!
						</TimelineEvent>
					</Timeline>
				</TimelineContainer>
			</Wrapper>
		</>
			</MainCardContainer>
		</>
	);
};

export default FourthMainCardContainer;

const contentStyle = {
	fontWeight: 'bold',
	borderRadius: '8px',
	backgroundColor: 'lavender',
}
