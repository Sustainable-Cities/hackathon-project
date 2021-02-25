import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: "5vh",
  },
  detailCard: {
    height: "20vh",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    padding: "3vw 3vh",
  },
  cardTitle: {
    fontSize: "1.3rem",
    color: "#787878",
  },
  cardNum: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  cardLabel: {
    color: "#787878",
    fontSize: ".7rem",
  },
}));

export default function MoreDetailsCards(props) {
  const classes = useStyles();
  const { property } = props;
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.detailCard}>
        <Typography className={classes.cardTitle}>Energy Usage</Typography>
        <div>
          <Typography className={classes.cardNum}>
            {property.total_energy_usage_kbtu} kBTU
          </Typography>
          <Typography className={classes.cardLabel}>Total</Typography>
        </div>
        <div>
          <Typography className={classes.cardNum}>
            {property.site_energy_usage_kbtu_sf} kBTU
          </Typography>
          <Typography className={classes.cardLabel}>Per Square Foot</Typography>
        </div>
      </Card>
      <Card className={classes.detailCard}>
        <Typography className={classes.cardTitle}>
          % Energy from Electricity
        </Typography>
        <div>
          <Typography className={classes.cardNum}>
            {`${parseFloat(property.percentage_elec) * 100}`}%
          </Typography>
          <Typography className={classes.cardLabel}>Of Total Energy</Typography>
        </div>
      </Card>
      <Card className={classes.detailCard}>
        <Typography className={classes.cardTitle}>Carbon Emissions</Typography>
        <div>
          <Typography className={classes.cardNum}>XXX,XXX.XX kg C02</Typography>
          <Typography className={classes.cardLabel}>Total</Typography>
        </div>
        <div>
          <Typography className={classes.cardNum}>
            {property.ghg_intensity} kg C02
          </Typography>
          <Typography className={classes.cardLabel}>Per Square Foot</Typography>
        </div>
      </Card>
      <Card className={classes.detailCard}>
        <Typography className={classes.cardTitle}>STAR Score</Typography>
        <div>
          <Typography className={classes.cardNum}>
            {property.customer_emissions_rank}/100
          </Typography>
          <Typography className={classes.cardLabel}>{}</Typography>
        </div>
      </Card>
    </div>
  );
}
