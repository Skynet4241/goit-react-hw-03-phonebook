import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid #eee;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Times New Roman', Times, serif;
`;

export const ContactsTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Times New Roman', Times, serif;
`;

export const ContactsForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const ContactFormLabel = styled.label`
  font-size: 16px;
  line-height: 1.67;
  letter-spacing: 0.01em;
  font-family: 'Times New Roman', Times, serif;
  color: #757575;
  display: block;
`;

export const ContactFormInput = styled.input`
  width: 100%;
  max-width: 350px;
  height: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding: 12px 12px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #2196f3;
  }
`;

export const ContactFormBtn = styled.button`
  font-size: 16px;
  font-weight: 600px;
  font-family: 'Times New Roman', Times, serif;
  height: 40px;
  max-width: 150px;
  padding: 0 20px;
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
