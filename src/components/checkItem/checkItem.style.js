import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  background-color:rgb(240, 231, 241);
  padding: 16px 24px;
  border-radius: 10px;
  margin-bottom: 8px;
  gap: 16px;

  @media (max-width: 576px) {
    padding: 12px 16px;
  }

  @media (max-width: 450px) {
    width: 100%;
    justify-content: center;
    aligin-items: center;
  }
`;

export const Checkbox = styled.label`
display: flex;
align-items: center;
cursor: pointer;
  
input {
    display: none; /* Esconde o checkbox padrão */
}

span {
    width: 28px;
    height: 28px;
    border: 1px solid #000;
    display: inline-block;
    border-radius: 4px;
    position: relative;
}

  input:checked + span {
    background-color:rgb(113, 51, 129); 
    border: none;
  }

  input:checked + span::after {
    content: "✔";
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  @media (max-width: 576px) {
    gap: 2px;
  }
`;

export const ItemText = styled.span`
  font-size: 20px;
  color: #333333;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};

  @media (max-width: 450px) {
    font-size: 16px;
    font-weight: semi-bold;
    color: black;
  }
`;

export const ItemDescription = styled.span`
  font-size: 18px;
  color:rgb(93, 93, 93);

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;