import styled from "styled-components";


export const FlexBoxContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   grid-row-gap: 2rem;

    @media(max-width: 768px) {
        flex-flow: column;
        align-items: center;
    }

    @media(max-width: 900px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        justify-content: space-around;
    }

    @media (min-width: 768px) and (max-width: 991.98px) { 
         justify-content: space-around;
         padding-top: 2rem;
         padding-bottom: 2rem;
     }

     @media (min-width: 768px) and (max-width: 1199.98px) { 
         justify-content: space-around;
         padding-left: 1rem;
         padding-right: 1rem;
         padding-top: 2rem;
         padding-bottom: 2rem;
     }
`;

export const TitleCenter = styled.h1`
     color: #333;
     font-family: 'open-sans',sans-serif;
     font-size: 40px;
     text-align: center;
`;