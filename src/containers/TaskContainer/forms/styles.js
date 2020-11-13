import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center !important",
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
  },
}));

export default useStyles;
