import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default ({ muscles, category, onSelect }) => {
  console.log("category " + category);
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    console.log("index " + index);
    console.log("muscles[index - 1] " + muscles[index - 1]);
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };
  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        value={index}
        onChange={onIndexSelect}
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
