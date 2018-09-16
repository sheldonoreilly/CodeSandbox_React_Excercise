import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Dialogs/Create";

export default ({ categories, onExerciseCreate }) => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            headline
          </Typography>
          <CreateDialog categories={categories} onCreate={onExerciseCreate} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
