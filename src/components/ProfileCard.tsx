import { StyleSheet, View, Image, Text, Linking } from "react-native";

import SocialButton from "./SocialButton";

import { IProfile } from "../types";

interface Props {
  data: IProfile;
}

const ProfileCard = ({ data }: Props) => {
  const handleSocialPress = (social: string) => {
    let url: string;
    switch (social) {
      case "facebook":
        url = data.socials.facebook;
        break;
      case "instagram":
        url = data.socials.instagram;
        break;
      case "github":
        url = data.socials.github;
        break;
    }
    Linking.openURL(url!);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: data.avatar }} />
        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <SocialButton
          name="facebook"
          color="#2975EE"
          onPress={() => handleSocialPress("facebook")}
        />

        <SocialButton
          name="instagram"
          color="#E24D63"
          onPress={() => handleSocialPress("instagram")}
        />

        <SocialButton
          name="github"
          color="#34393E"
          onPress={() => handleSocialPress("github")}
        />
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 6,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    flex: 1,
    gap: 8,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "dimgrey",
    lineHeight: 20,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
