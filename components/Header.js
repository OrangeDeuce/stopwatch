import * as React from "react";
import { Appbar } from "react-native-paper";

//Header of App to give a title

const MyHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "orange" }}>
      <Appbar.Content
        title="A Stopwatch!"
        style={{ alignItems: "center", fontStyle: "bold" }}
      />
    </Appbar.Header>
  );
};

export default MyHeader;
