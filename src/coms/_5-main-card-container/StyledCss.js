import styled, { css } from 'styled-components';
import { MainCardContainer } from '../commonStylesCss';

//! constants
import { FOOTER_COLOR } from '../../const/css-constant';
const {
	FOOTER_PRIMARY_BG,
	FOOTER_SECONDARY_BG,
	FOOTER_PRIMARY_FONT_COLOR,
	FOOTER_SECONDARY_FONT_COLOR,
} = FOOTER_COLOR;

//! { css }

//! styled
export const ReMainCardContainer = styled(MainCardContainer)`
	height: 50vh;
	font-family: Roboto;
	background-color: ${FOOTER_PRIMARY_BG};
	color: ${FOOTER_PRIMARY_FONT_COLOR};
`;
export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	& > div {
		height: 70%;
	}
`;
export const LeftContainer = styled.div`
	width: 40%;
	padding-left: 3rem;
	margin-top: 3rem;
`;
export const I = styled.i`
	font-size: 0.7rem;
	padding-right: 1rem;
`;
export const RightContainer = styled.div`
	width: 55%;
	margin-top: 3rem;
	background-color: ${FOOTER_SECONDARY_BG};
	color: ${FOOTER_PRIMARY_FONT_COLOR};

	border-radius: 0.75rem;
	padding-top: 1rem;
  text-align: center;
  p{opacity: 0.7}
  .middle-text{
    margin: 1.3rem 0;
    .name {
      font-size: 1.8rem;
      font-family:  sans-serif;
    }
    .position {
      font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
        font-size: 0.8rem;      color: ${FOOTER_SECONDARY_FONT_COLOR};

    }

  }
	.i-container {
    a{
color: inherit;
      i{
        font-size: 1.5rem;
        padding: .5rem 1rem;
      }
    }
	}
`;
