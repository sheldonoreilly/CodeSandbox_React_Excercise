import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import FormA from './Form';

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () =>
    this.setState({ open: !this.state.open });

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  };

  render() {
    // const { classes } = this.props;
    const { muscles } = this.props;
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
            <FormA
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
