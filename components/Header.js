import * as React from "react";
import { Appbar } from "react-native-paper";

//Header of App to give a title

const MyHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "green" }}>
      <Appbar.Content
        title="This cool ass Stopwatch!"
        style={{ alignItems: "center" }}
      />
    </Appbar.Header>
  );
};

export default MyHeader;
