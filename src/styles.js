import styled from "styled-components";
import List from "@material-ui/core/List";

export const listContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  margin-bottom: 260px;
`;
export const Container = styled(List)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

