import { Grid } from "@material-ui/core";
import Expense from "../components/Dashboard/Cards/Expense";
import NewLeds from "../components/Dashboard/Cards/NewLeds";
import Orders from "../components/Dashboard/Cards/Orders";
import Sales from "../components/Dashboard/Cards/Sales";

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3}>
        <NewLeds />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Sales />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Orders />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Expense />
      </Grid>
    </Grid>
  );
}
