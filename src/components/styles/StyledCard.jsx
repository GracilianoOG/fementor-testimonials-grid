import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: hsl(263, 55%, 52%);
  border-radius: 8px;
  max-width: 326px;
  padding: 32px;

  .title {
    color: hsl(0, 0%, 100%);
  }

  .header {
    align-items: center;
    display: flex;
  }

  .avatar {
    border-radius: 50%;
  }
`