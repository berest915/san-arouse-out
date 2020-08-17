import styled, { css } from 'styled-components';
import { MainCardContainer } from '../commonStylesCss';

//! { css }

//! styled
export const ReMainCardContainer = styled(MainCardContainer)`
height: 100%;
  max-height: 150vh;
  
`

export const Wrapper = styled.div`
  padding: 100px 0;
	display: flex;
`
export const TimelineContainer = styled.div`
	margin: 0 auto;
	width: 50%;
	border-right: ${props => (props.borderRight ? '1px solid black' : 'none')};
`
export const H3 = styled.h3`
	margin: 8px;
	text-align: ${props => (props.align === 'left' ? 'left' : 'right')};
`
