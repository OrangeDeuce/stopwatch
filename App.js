import { StyleSheet, View } from "react-native";
import Stopwatch from "./components/Stopwatch";

export default function App() {
  return (
    <View style={styles.container}>
      <Stopwatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
