import styled from "styled-components";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core";



export const useStyles = makeStyles(() => ({
  listItem: {
    marginTop: 10,
   

  }
}));


 export const Container = styled(List)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-attachment: red
`; 

export default useStyles;



   

