import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () =>
    this.setState({ open: !this.state.open });

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Button
          variant="fab"
          mini
          onClick={this.handleToggle}
        >
          <AddIcon />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a new Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form categories={this.props.categories} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleSubmit}
              color="primary"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
