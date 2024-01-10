import { Card, CardBack, CardContainer, CardFront, Container } from "./styled";
import { useState } from "react";
import { teamInfo } from "./info";
import { FaGithub } from "react-icons/fa";

const TeamSection = () => {
  const [flippedCards, setFlippedCards] = useState(
    Array(teamInfo.length).fill(false),
  );

  const handleCardClick = (index) => {
    setFlippedCards(
      flippedCards.map((flipped, i) => (i === index ? !flipped : flipped)),
    );
  };

  return (
    <Container id="team">
      <h1>
        <span>줄었슈링크</span> 가족들을 소개합니다
      </h1>
      <CardContainer>
        {teamInfo.map((member, index) => (
          <Card
            key={index}
            flipped={flippedCards[index]}
            onClick={() => handleCardClick(index)}
          >
            <CardFront>
              <img
                src={`${
                  member.profileUrl ||
                  `https://api.dicebear.com/7.x/lorelei-neutral/svg?seed=${member.name}`
                }`}
                alt={`${member.name} 프로필 사진`}
              />
            </CardFront>
            <CardBack>
              <p>{member.name}</p>
              <p>{member.part}</p>
              <a href={member.githubUrl}>
                <FaGithub />
              </a>
            </CardBack>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default TeamSection;
