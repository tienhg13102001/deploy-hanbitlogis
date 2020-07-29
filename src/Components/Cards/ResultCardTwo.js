import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.scss'


const useStyles = makeStyles({
  root: {
    minWidth: 150,
  },
  title: {
    fontSize: 16,
    fontWeight:'600',
    display:'flex',
    paddingLeft: '10px',
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'NanumSquareOTF'
  },
  pos: {
    fontSize: 13,
    marginBottom: 5,
    fontWeight:'300',
    fontFamily:'NanumSquareOTF',
    color: '#535353'
  },
  number: {
    color:'#da2320',
    fontFamily:'NanumSquareOTF',
    fontWeight:'600'
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <div className="Cards_flex">
        <Typography className={classes.number} variant="h5" component="h2">
            02
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
            인력관리 효율화로 신회성 강화
        </Typography>
        </div>
        <Typography className={classes.pos} color="textSecondary">
        · 운전자에 대하여 급여인상, 퇴직금, 기타 후생복지비 절감
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        · 노사분규등 인력관리가 다소 용이함
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        · 정규근무시간 외에도 인력 활용도 용이 (상호간 협의하여)
        </Typography>
      </CardContent>
    </Card>
  );
}

