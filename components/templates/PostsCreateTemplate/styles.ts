import styled from 'styled-components';
export const Container = styled.div`
  padding: 20px;
`;
export const PostArea = styled.div`
  display: flex;
  aline-items: center;
  margin: 1rem 0;
`;
export const Head = styled.p`
  width: 20%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
`;
export const InputTitle = styled.input`
  width: 80%;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 4px 6px;
`;
export const InputText = styled.textarea`
  width: 80%;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 4px 6px;
`;

export const ButtonArea = styled.div`
  display: flex;
  aline-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  border-radius: 20px;
  padding: 8px 12px;
  min-width: 120px;
  border: none;
  background-color: #246a73;
  color: #fff;
`;
