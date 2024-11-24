import { StyleSheet, View } from "react-native";

import ProfileCard from "./src/components/ProfileCard";

import data from "./src/data/profile.json";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
