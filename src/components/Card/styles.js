import styled from 'styled-components'

export const Container = styled.div`
    width: 150px;
    height: 180px;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    justify-content:  space-between;
    flex-direction: column;
    border: 1px solid white;
    background-color: #062f49;
    align-items: center;
    h2, h3{
        text-transform: uppercase;
        margin: 0;
        
        color: white;
       
    }

   button{
       width: 100px;
       border: none;
       padding: 8px;
       border-radius: 8px;
       color: white;
       text-transform: uppercase;
       font-weight: bolder;
       background-color: #251a38;
       cursor: pointer;
        border: 1px solid white;
       &:hover{
           background-color: #46395c;
           transform: scale(1.05);
       }
   }
`