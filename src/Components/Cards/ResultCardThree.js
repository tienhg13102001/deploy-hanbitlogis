import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Cards.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    boxShadow: "initial",
    border: "1px solid #ebebeb",
    borderRadius: "0px",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    display: "flex",
    paddingLeft: "10px",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "NanumSquareOTF",
  },
  pos: {
    fontSize: 13,
    marginBottom: 5,
    fontWeight: "300",
    fontFamily: "NanumSquareOTF",
    color: "#535353",
  },
  number: {
    color: "#da2320",
    fontFamily: "NanumSquareOTF",
    fontWeight: "600",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="Cards_flex">
          <Typography className={classes.number} variant="h5" component="h2">
            03
          </Typography>
          <Typography className={classes.title} variant="h5" component="h2">
            경쟁력 강화로 기업 이미지 향상
          </Typography>
        </div>
        <Typography className={classes.pos} color="textSecondary">
          · 경험 있는 운전자를 채용하여 물류배송업무의 능률 향상
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          · 고객사 요구에 미흡할시 기업 이미지 및 신뢰도 상실
        </Typography>
      </CardContent>
    </Card>
  );
}
