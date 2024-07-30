import styled from "styled-components";

export const StyledCard = styled.article`
  --color-bg: var(--color-white);
  --color-title: var(--color-dark-grayish-blue);
  --color-text: var(--color-dark-grayish-blue);
  --color-border: transparent;

  background-color: var(--color-bg);
  border-radius: 8px;
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

  @media screen and (min-width: 992px) {
    & {
        grid-area: ${props => props.$gridArea};
        max-width: ${props => props.$maxWidth};
    }
  }
`

export const StyledVioletCard = styled(StyledCard)`
  --color-bg: var(--color-violet);
  --color-title: var(--color-white);
  --color-text: var(--color-gray);
  --color-border: #9971d7;
`

export const StyledGrayCard = styled(StyledCard)`
  --color-bg: var(--color-dark-grayish-blue);
  --color-title: var(--color-white);
  --color-text: var(--color-gray);
`

export const StyledBlackCard = styled(StyledCard)`
  --color-bg: var(--color-blackish-blue);
  --color-title: var(--color-white);
  --color-text: var(--color-gray);
  --color-border: var(--color-violet);
`