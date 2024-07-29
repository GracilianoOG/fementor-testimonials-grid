import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 32px;
  padding-top: 24px;

  .name,
  .status,
  .description,
  .title {
    color: var(--color-dark-grayish-blue);
  }

  .header {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .avatar {
    border-radius: 50%;
    outline: 2px solid transparent;
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
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .description {
    opacity: 70%;
    line-height: 1.4;
  }
`