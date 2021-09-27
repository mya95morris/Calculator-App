import styled from 'styled-components';

const ButtonStyles = styled.button`
  font-size: var(--fontsizenum);
  background: var(--keygraybg);
  color: var(--padtxt);
  cursor: pointer;
  border-radius: 5px;
  width: 65px;
  height: 60px;
  box-shadow: 0 5px var(--keygrayshadow);
  margin: 8px 0;
  font-family: var(--font);
  line-height: 2;
  padding: 0;
  @media (min-width: 765px) {
    width: 95px;
    height: 55px;
    margin: 12px 0;
    border-radius: 10px;
  }
`;

export default ButtonStyles;
