import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    border: "2px solid red",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "55px 0",
  },
  testBorder: {
    color: "red",
  },
}))

export default useStyles
