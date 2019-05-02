import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { withStyles, CircularProgress } from '@material-ui/core';

const style = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    height: '100vh',
    margin: 'auto 0',
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

  const columns = ['id', 'name', 'username', 'email'];
  const options = {
    filterType: 'dropdown',
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
      console.log({ selectedRows, displayData, setSelectedRows });
    },
  };
  const renderTable = (
    <MUIDataTable data={User} columns={columns} options={options} />
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        {Loading === false ? (
          <CircularProgress className={classes.root} />
        ) : (
          renderTable
        )}
      </div>
    </React.Fragment>
  );
};

export default withStyles(style)(Users);
