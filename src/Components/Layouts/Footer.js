import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({ muscles, category, onSelect }) => {
  //console.log("selCategory", category);
  /*basically taking the selected category as a string and then finding its index 
  in the array of muscles (the index of muscles === is to be the tab name).
  find index is a interative array - like map, etc.*/
  const index = category
    ? muscles.findIndex(group => {
        return group === category;
      }) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    //  console.log("00000000000000000");
    return onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => <Tab key={group} label={group} />)}
      </Tabs>
    </Paper>
  );
};
