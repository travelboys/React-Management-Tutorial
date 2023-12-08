import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import {Paper} from '@mui/material';
import {Table} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableRow} from '@mui/material';
import {TableCell} from '@mui/material';
// import {withStyles} from '@mui/material';
import {withStyles} from '@mui/styles';

const styles = theme => ({
  root : {
    width: '100',
    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080n
  }
})

const customers = [{
  'id': 1,
  'img': 'https://placebear.com/100/100',
  'name': '이민서',
  'birthday': '890411',
  'gender': '여자',
  'job': '교사'
},
{
  'id': 2,
  'img': 'https://baconmockup.com/100/100',
  'name': '오상진',
  'birthday': '860103',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 3,
  'img': 'https://placekitten.com/100/100',
  'name': '심슨',
  'birthday': '241010',
  'gender': '여자',
  'job': '애기'
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호 </TableCell>
              <TableCell>이미지 </TableCell>
              <TableCell>이름 </TableCell>
              <TableCell>생년월일 </TableCell>
              <TableCell>성별 </TableCell>
              <TableCell>직업 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return (
                <Customer
                    key={c.id} 
                    id={c.id}
                    img={c.img}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);