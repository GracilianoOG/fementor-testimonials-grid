import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: hsl(263, 55%, 52%);
  border-radius: 8px;
  max-width: 326px;
  padding: 32px;

  .name,
  .status,
  .description {
    color: hsl(0, 0%, 100%);
  }

  .header {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .avatar {
    border-radius: 50%;
    width: 2rem;
  }

  .name {
    font-size: 0.813rem;
  }

  .status {
    opacity: 50%;
  }

  .title {
    color: hsl(0, 0%, 100%);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .description {
    opacity: 70%;
    line-height: 1.4;
  }
`