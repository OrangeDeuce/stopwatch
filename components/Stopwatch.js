import React, { useState, useRef, useCallback } from "react"; // 1
import { StyleSheet, SafeAreaView, View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar"; // 3
import Constants from "expo-constants"; // 4
import Result from "./Result"; // 5
import Control from "./Control"; //6
import { displayTime } from "./utils"; // 7
import MyHeader from "./Header"; // 8

// Begin Stopwatch function component logic
export default function Stopwatch() {
  // 9
  const [time, setTime] = useState(0); // 10 Create new state with useState named 'time', initially set to '0'
  const [isRunning, setRunning] = useState(false); // 11 create new useState state named 'isRunning', a boolean, set to 'false'
  const [results, setResults] = useState([]); // 12 create new useState 'results' which will be an array and set intially to empty array
  const timer = useRef(null); // 13 Can set some variable to a value that CAN change and NOT cause a re-render

  const handleLeftButtonPress = useCallback(
    () => {
      // 14 1st param - a handler function set to the useCallback for one of the button's onPress (takes memoized function and array of dependency varibles)
      if (isRunning) {
        // 15 if isRunning is true, the take previousResults, add existing 'time' state to index 0, combine both into new array assigned to 'results' state
        setResults((previousResults) => [time, ...previousResults]);
      } else {
        // 16 since isRunning is false, then button press will setResults to empty array [] and 'time' will be set to '0' (To 'Reset'!)
        setResults([]);
        setTime(0);
      }
    },
    [isRunning, time] // 17 2nd param - the useCallback will only execute when one of these dependencies change only!
  );

  const handleRightButtonPress = useCallback(
    () => {
      // 18 using useCallback to return a memoized function that will run only when the isRunning dependency changes
      if (!isRunning) {
        // 19 first to check if isRunning is false. So if stopwatch is not running and we press button, the following will execute...
        const interval = setInterval(() => {
          // 20 create a setInterval which runs the callback inside every 10 milliseconds (Called immediately! Will now start since button activated!)
          setTime((previousTime) => previousTime + 1); // 21 To setTime to the value of 'previous time' + 1 (using previous state for new state!)
        }, 10); // this setInterval also has an 'id' returned that we can use to clear the interval

        timer.current = interval; //timer.current refers the to current value set using useRef(null), so now timer.current's value is now
        // recognized as 'interval'!  timer.current represents an INITIAL VALUE, but here it is re-assigned to the 'id' named 'interval'.
        // This will be used to clear the interval
      } else {
        // 22 If isRunning is actually 'true' then to clear the interval assigned to 'id' timer.current! i.e. If the stopwatch IS currently running,
        // then the button press will HALT the timer!
        clearInterval(timer.current);
      }

      setRunning((previousState) => !previousState); // 23 To change state of isRunning to the OPPOSITE of what is already there.
    },
    [isRunning] // 24 Note: handleRightButtonPress's callBack() will only execute whenever [isRunning] changes!
  );

  return (
    // 26 create return statement for JSX
    <SafeAreaView style={styles.container}>
      {/* 27 create a SafeAreaView with styles.container*/}
      <MyHeader /> {/* 28 Insert MyHeader in this position*/}
      <StatusBar style="light" />{" "}
      {/* 29 Insert StatusBar in this position with an inline style */}
      <View style={styles.display}>
        {/* 30 Insert View box with 'display' styling */}
        <Text style={styles.displayText}>
          {/* 31 To display the TIME as TEXT! Using 'displayText' styling */}
          {displayTime(time)}{" "}
          {/*To read current 'time' state, run through displayTime and display value here*/}
        </Text>
      </View>
      <View style={styles.control}>
        {/* 32 to create a new View box for buttons (Controls) and styling '.control' */}
        <Control // 33 to insert Control component (buttons) here. Requires 3 props as listed here...
          isRunning={isRunning} // 34 this prop will depend on the current isRunning state of this Stopwatch component
          handleLeftButtonPress={handleLeftButtonPress} // 35 this prop will use the handleLeftButtonPress of this component
          handleRightButtonPress={handleRightButtonPress} // 36 same...
        />
      </View>
      <View style={styles.result}>
        {/* 37 Insert next View box for Results component. Use 'result' styling. Takes 1 prop 'results' */}
        <Result results={results} />{" "}
        {/* 38 Insert Result component here and pass in 'results' prop */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // 25 Create StyleSheet with 'display' and 'container' and 'displayText' and 'control' and 'result' objects to start off
  display: {
    //39  to flesh out all the styling listed below!
    flex: 3 / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  displayText: {
    color: "#fff",
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetic Neue" : null,
  },
  control: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: {
    flex: 2 / 5,
  },
});
