import styled, { css } from 'styled-components';
import { MainCardContainer } from '../commonStylesCss';

//! { css }

//! styled
export const ReMainCardContainer = styled(MainCardContainer)`
	display: flex;
`;
export const Container = styled.div`
	display: flex;
	height: 75vh;
	width: 100%;
	align-self: center;
`;
export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 4;
`;
export const Card = styled.div`
  flex: 1;
  display: flex;
  margin: 20px;
  box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, 0.2) ;

`;
export const RightContainer = styled.div`
	flex: 6;
	justify-content: center;
	align-items: center;
	align-self: center;
	text-align: center;
`;
// main{
//   display: grid;
//   grid-template-columns: repeat(3, auto);
//   grid-gap: 4rem;
//   margin-top: 3em;
// }
// .card{
//   background: white;
//   padding: 1.5rem;
//   border-radius: .5rem;
//   box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, 0.2) ;
// }