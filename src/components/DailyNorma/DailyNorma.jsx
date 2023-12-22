import {
  Container,
  NormaContainer,
  NormaTitle,
  DailyNormaWrapper,
  NormaP,
  NormaButton,
} from './DailyNorma.styled';

export const DailyNorma = () => {
  return (
    <Container>
      <NormaContainer>
        <NormaTitle>My daily norma</NormaTitle>
        <DailyNormaWrapper>
          <NormaP>2.0 L</NormaP>
          <NormaButton>Edit</NormaButton>
        </DailyNormaWrapper>
      </NormaContainer>
    </Container>
  );
};
