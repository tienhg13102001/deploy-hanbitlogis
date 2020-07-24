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
    fontSize: 11,
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
            01
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
            원가절감으로 기업 경쟁력 향상
        </Typography>
        </div>
        <Typography className={classes.pos} color="textSecondary">
        ·초기 차량 구입시 자금 압박 해소 (제세금 및 공과금)
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        ·고정지출비절감, 감가상각비, 유지관리비 해소 (월정 지입료만 지출)
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        ·자연 및 주변 환경에 대한 책임 해소 (화물의 파손 및 도난)
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        ·차량 및 인적 사고에 대한 책임 해소
        </Typography>
      </CardContent>
    </Card>
  );
}

