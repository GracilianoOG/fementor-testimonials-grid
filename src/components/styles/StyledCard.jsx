import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: hsl(0, 0%, 100%);
  border-radius: 8px;
  padding: 32px;
  padding-top: 24px;

  .name,
  .status,
  .description {
    color: hsl(217, 19%, 35%);
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
    color: hsl(217, 19%, 35%);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .description {
    opacity: 70%;
    line-height: 1.4;
  }
`