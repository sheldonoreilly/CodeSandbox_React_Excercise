import React, { Fragment } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default props => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            headline
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
