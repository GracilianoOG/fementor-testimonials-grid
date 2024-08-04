import styled from "styled-components";
import quotation from "../../assets/images/bg-pattern-quotation.svg";

export const StyledCard = styled.article`
  --color-bg: var(--color-white);
  --color-title: var(--color-dark-grayish-blue);
  --color-text: var(--color-dark-grayish-blue);
  --color-border: transparent;

  ${props => props.$quotation && `background: url(${quotation}) no-repeat top right 23px;`}
  background-color: var(--color-bg);
  border-radius: 8px;
  grid-area: ${props => props.$gridArea};
  padding: 32px;
  padding-top: 24px;

  .name,
  .status,
  .description {
    color: var(--color-text);
  }

  .header {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .avatar {
    border-radius: 50%;
    outline: 2px solid var(--color-border);
    width: 1.75rem;
  }

  .name {
    font-size: 0.813rem;
  }

  .status {
    font-size: 0.688rem;
    opacity: 50%;
  }

  .title {
    color: var(--color-title);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .description {
    opacity: 70%;
    line-height: 1.4;
  }

  @media screen and (min-width: 1200px) {
    & {
        ${props => props.$quotation && `background: url(${quotation}) no-repeat top right 79px, var(--color-bg);`}
        max-width: var(${props => props.$big ? "--card-big" : "--card-small"});
    }
  }
`

const StyledDarkCard = styled(StyledCard)`
  --color-bg: var(--color-blackish-blue);
  --color-title: var(--color-white);
  --color-text: var(--color-gray);
`

export const StyledVioletCard = styled(StyledDarkCard)`
  --color-bg: var(--color-violet);
  --color-border: #9971d7;
`

export const StyledGrayCard = styled(StyledDarkCard)`
  --color-bg: var(--color-dark-grayish-blue);
`

export const StyledBlackCard = styled(StyledDarkCard)`
  --color-border: var(--color-violet);
`