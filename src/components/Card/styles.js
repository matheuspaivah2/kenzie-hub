import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    height: 150px;
    border-radius: 8px;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    border: 1px solid white;
    background-color: #52195b;
    align-items: center;
    h2, h3{
        text-transform: uppercase;
        margin: 0;
        margin-top: 15px;
        color: white;
       
    }

   button{
       width: 100px;
       border: none;
       padding: 8px;
       border-radius: 8px;
       margin-top: 30px;
       text-transform: uppercase;
       font-weight: bolder;
       background-color: #f0e2ff;
       cursor: pointer;

       &:hover{
           background-color: thistle;
           transform: scale(1.05);
       }
   }
`