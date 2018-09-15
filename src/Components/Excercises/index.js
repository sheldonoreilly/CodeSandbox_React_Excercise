import React from "react";
import Grid from "@material-ui/core/Grid";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: { padding: 20, marginTop: 20, marginBottom: 20 }
};

export default props => {
  return (
    <Grid container xs={12}>
      <Grid item xs={6}>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item xs={6}>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  );
};
