import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: ${(props) => props?.$cardColors?.bg || "hsl(0, 0%, 100%)"};
  border-radius: 8px;
  max-width: 326px;
  padding: 32px;
  padding-top: 24px;

  .name,
  .status,
  .description {
    color: ${(props) => props?.$cardColors?.text || "hsl(217, 19%, 35%)"};
  }

  .header {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .avatar {
    border-radius: 50%;
    outline: 2px solid ${(props) => props?.$cardColors?.avatar || "hsl(0, 0%, 100%)"};
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
    color: ${(props) => props?.$cardColors?.title || "hsl(217, 19%, 35%)"};
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .description {
    opacity: 70%;
    line-height: 1.4;
  }
`