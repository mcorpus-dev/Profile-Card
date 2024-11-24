import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  name: keyof typeof FontAwesome.glyphMap;
  color: string;
  onPress: () => void;
}

const SocialButton = ({ name, color, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <FontAwesome name={name} size={24} color={color} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eeeeee",
    borderRadius: 6,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
