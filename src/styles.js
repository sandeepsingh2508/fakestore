import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "paper",
    padding: "8 0 6",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    padding: "56.25%", //16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "paper",
    padding: "50px 0",
  },
}));

export default useStyles;
