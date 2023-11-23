import styled from 'styled-components'

export const Container = styled.div`
min-height: 100px;
z-index: 99;
position: fixed;
top: 0;
display: flex;
padding:5px;
justify-content: space-between;
align-items: center;
  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.3s ease-out;


img{
    width: 25%;
}
`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 70px;
`
export const Li = styled.li`
cursor: pointer;
font-size: 28px;
font-weight: 600;
position: relative;

a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 4px;
    width: ${(props) => (props['is-active'] === 'true' ? '100%' : '0%')};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    transition: width 0.5s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`
