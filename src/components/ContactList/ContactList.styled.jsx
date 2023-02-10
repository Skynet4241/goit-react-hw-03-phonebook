import styled from 'styled-components';

export const ContactFormList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const ContactFormItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 60px;
`;

export const ContactFormText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  font-family: 'Times New Roman', Times, serif;
`;

export const ContactFormDeleteBtn = styled.button`
  font-size: 12px;
  font-weight: 600px;
  font-family: 'Times New Roman', Times, serif;
  height: 20px;
  max-width: 150px;
  padding: 0 20px;
  margin: 0 7px;
  color: white;
  background-color: #2196f3;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b5089;
  }
`;
