import styled, { css } from 'styled-components';

//! { css }

//! styled
export const CoverPageText = styled.div`
	text-align: right;
	/* position: absolute; */
	/* top: 15%; */
	/* right: 0; */
	/* transform: translate(-50%, -50%); */
	color: black;
`;
export const Text = styled.h1`
	position: absolute;
	${props => {
		switch (props.variant) {
			case 'one':
				return `
        font-size: 5rem;
        top: 13%;
        right: 3%;
        color: rgb(112,128,144);
        `;
			case 'two':
				return `
        font-size: 3.5rem;
        top: 35%;
        right: 6%;color:white;  
        `;
			case 'three':
				return `
        font-size: 2.5rem;
        top: 50%;
        right: 3%;
        color: gray;
        `;
			default:
				return ``;
		}
	}}
`;
