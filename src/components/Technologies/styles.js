import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 50px;

    ul{
        list-style: none;
        display: flex;
        column-gap: 20px;
        row-gap: 20px;
        border: 2px solid white;
        border-radius: 8px;
        max-width: 1000px;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
        padding: 30px;
        background-color: #101322;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
    }

  
`

export const Empty = styled.span`
    display: block;
    margin-top: 200px;
    font-size: 30px;
    color: white;
`