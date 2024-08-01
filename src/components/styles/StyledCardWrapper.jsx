import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: grid;
  gap: 23px 29px;
  grid-template-areas: "card1" "card2" "card4" "card5" "card3";

  @media screen and (min-width: 992px) {
    & {
      grid-template-areas: 
      "card1 card1 card2 card3"
      "card4 card5 card5 card3";
    }
  }
`