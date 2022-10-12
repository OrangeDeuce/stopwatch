import React from "react"; // 1 import React
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"; // 2 import all components from react native to be used

// Create the Button Controls for stopwatch
function Control({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
  // 3 create new function component Control with 3 props for buttons
  return (
    //4 return statement setup with react fragment inside <></>
    <>
      <TouchableOpacity // 5 create first button handleLeftPress with it's styling and onPress function to use
        style={[
          // 6 style to use plus a specific style override - for the border!
          styles.controlButtonBorder, // Note: still need to create this stylesheet down below!
          { backgroundColor: isRunning ? "#333333" : "#1c1c1e" }, // 7 will apply 2 conditional background button colors
        ]}
        onPress={handleLeftButtonPress} // 8 to pass handler to use in onPress
      >
        <View style={styles.controlButton}>
          {/*9 to add View for button with a specific style*/}
          <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
            {/* 10 to add conditional colors to the text in this button*/}
            {isRunning ? "Lap" : "Reset"}
            {/*= 10 to add conditional text labels for button  if running or not */}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity // 11 to add next final button for starting and stopping the stopwatch
        style={[
          // 12 add styling to the border again
          styles.controlButtonBorder, //again this will be an a reference for style + an override for conditional background color
          { backgroundColor: isRunning ? "340e0d" : "0a2a12" },
        ]}
        onPress={handleRightButtonPress} // 13 to use handleRightButtonPress handler for onPress
      >
        <View style={styles.controlButton}>
          {/* 14 add a View  inside to style the button*/}
          <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
            {/* 15 to add conditional style to Text color*/}
            {isRunning ? "Stop" : "Start"}{" "}
            {/* 16 to now add conditional button text labels*/}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const CENTER = {
  // 17 To avoid retyping this inside the StyleSheet, just to create a reusable object for 2 properties
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  // 18 create our button styling for both controlButtonBorder and controlButton
  controlButtonBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },

  controlButton: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default React.memo(Control); // 19 to export the Control component using React.memo (A higher order componnent)
