import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4f4f4; 
  width: 80vh;
  min-width: 400px;
  min-height: 700px;
  max-width: 900px;
  max-height: 90vh;
  padding: 32px;
  border-radius: 32px;
  gap: 32px;

  @media (min-width: 200px) {
    padding: 24px;
    width: 100%;
  }

  @media (max-width: 992px) {
      max-height: 90vh;
      min-height: 700px;
      max-width: 90vh;
      min-width: 400px;
      gap: 16px;
  }

  @media (max-width: 600px) {
      width: 90%;
      max-width: 90%;
      min-height: 100vh;
      padding: 16px;
      gap: 8px;
  }

  @media (max-width: 450px) {
    justify-content: flex-start;
  }
`;

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

    @media (min-width: 200px) {
    gap: 4px;
    width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-style: extra-bold;
  font-weight: 1000;
  color: #333333;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color:rgb(93, 93, 93);

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const ChecklistContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: auto;

  @media (max-width: 400px) {
    height: 300px;
  }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;