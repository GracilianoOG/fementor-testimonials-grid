import { StyledCard } from "./styles/StyledCard"

const Card = ({ name, status, title, review, avatar }) => {
  return (
    <StyledCard>
      <div className="header">
        <img className="avatar" src={avatar} alt="" />
        <div className="info">
          <h2 className="name">{ name }</h2>
          <p className="status">{ status || "Verified Graduate" }</p>
        </div>
      </div>
      <h3 className="title">{ title }</h3>
      <p className="description">{ review }</p>
    </StyledCard>
  )
}

export default Card