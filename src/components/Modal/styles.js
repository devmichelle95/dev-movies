import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba( 0, 0, 0, 0.6);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
background-color: #000;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
padding: 30px;
max-width: 1200px;

iframe {
    border: none;
}
`
export const Close = styled.div`
button{
    position: absolute;
    top: -110px;
    margin-top: 120px;
    
background-color:#ffff;
cursor: pointer;
font-size: 20px;
font-weight: 900;
border-radius: 100px;
border: solid 3px #ff0000;
padding: 3px;
}
`