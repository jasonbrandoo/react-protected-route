import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  SearchState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  SearchPanel,
  Toolbar,
} from '@devexpress/dx-react-grid-material-ui';
import { withStyles, CircularProgress, Paper } from '@material-ui/core';

const style = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  loading: {
    marginTop: '10rem',
  },
  table: {
    width: '100%',
  },
});

const Users = ({ classes }) => {
  const [User, setUser] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUser(res.data);
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      name: 'id',
      title: 'Id',
    },
    {
      name: 'name',
      title: 'Name',
    },
    {
      name: 'username',
      title: 'Username',
    },
    {
      name: 'email',
      title: 'Email',
    },
  ];

  console.log(User);
  const DataTable = () => (
    <Paper>
      <Grid columns={columns} rows={User}>
        <SearchState defaultValue="" />
        <IntegratedFiltering />
        <SortingState />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        {Loading === false ? (
          <CircularProgress className={classes.loading} />
        ) : (
          <DataTable />
        )}
      </div>
    </React.Fragment>
  );
};

export default withStyles(style)(Users);
