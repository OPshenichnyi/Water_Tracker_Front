import styled from 'styled-components';
import mainDesct from '../images/main_desctop.jpg';
import mainDesct2x from '../images/main_desctop@2x.jpg';

export const MainContainer = styled.div`
  @media screen and (min-width: 1440px) {
    background-image: url(${mainDesct});
    background-size: cover;
    background-position: center;

    @media screen and (min-resolution: 192dpi) {
      background-image: url(${mainDesct2x});
      padding-bottom: 50px;
    }
  }
`;
