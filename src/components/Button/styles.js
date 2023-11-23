import styled, {css} from "styled-components";

const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`;
export const ButtonWhite = styled.button`
  ${buttonStyles}
`;
export const ButtonRed = styled.button`
  ${buttonStyles}
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: -1px 2px 20px 9px rgba(255,0,0,0.75);
;
  &:hover {
    box-shadow: -1px 4px 23px 15px rgba(255,0,0,0.75);
    background: #ff0000;
    color: #ffffff;
  }

  &:active{
    box-shadow: -1px 4px 23px 15px rgba(250, 162, 162,0.75);
    background:#ffffff;
    color:  #ff0000;

  }
`;
