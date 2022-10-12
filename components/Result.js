import React from "react"; //1
import { StyleSheet, Text, View, ScrollView } from "react-native"; // 2
import { displayTime } from "./utils"; //3 going use the entire displayTime function from utils.js

function Result({ results }) {
  // 4 Establish Result component with results (an array!) prop as paramter (These results are what will be printed as 'lap time')
  return (
    // 5 set up return statement
    <ScrollView>
      {" "}
      {/* 6 Create Scrollview element to display results for Lap/Reset button*/}
      <View style={styles.resultItem} />{" "}
      {/* 8 create new View to first display - self closing tag*/}
      {results.map(
        (
          item,
          index // 9 A .map array method to iterate over the 'results array and return a new inner <View> to render
        ) => (
          <View key={index} style={styles.resultItem}>
            {/* 10 The View to render which will depend on the results array. includes key and style*/}
            <Text style={styles.resultItemText}>
              {/* 11 */}
              Lap {results.length - index}{" "}
              {/* 12 The text 'Lap' + the # count of laps in results*/}
            </Text>
            <Text style={styles.resultItemText}>
              {/* 13 add another set of text next to first <Text> to display */}
              {displayTime(item)}
              {/* 14 to now render the display time once we pass in 'item' from results*/}
            </Text>
          </View>
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // 7 Set up the  StyleSheet so you can use styles.resultItem above

  resultItem: {
    // 15 fill style properties for the <View> box that holds both <Text>
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 15,
  },

  resultItemText: {
    // 16 fill  in styling for the <Text> themselves
    color: "#fff",
  },
});

export default React.memo(Result); // 17 to export and wrap the Result component in a React.memo() call to prevent unnecessary re-renders
