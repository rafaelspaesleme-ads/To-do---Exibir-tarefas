import styled from "styled-components";
import List from "@material-ui/core/List";

export const listContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  margin-bottom: 260px;
`;
export const FormStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 30px;
  margin-bottom: 260px;
`;

export const Container = styled(List)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-attachment: red
`;



   

