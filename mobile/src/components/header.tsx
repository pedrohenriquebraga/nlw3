import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function HandleGoBackToHomepage() {
    navigation.navigate("OrphanageMap");
  }

  return (
    <View style={styles.container}>
      <BorderlessButton>
        <Feather
          name="arrow-left"
          size={24}
          color="#15b6d6"
          onPress={navigation.goBack}
        />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton>
          <Feather
            name="x"
            size={24}
            color="#ff66ab"
            onPress={HandleGoBackToHomepage}
          />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9fafc",
    borderWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 44,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "nunito700",
    color: "#8fa7b3",
    fontSize: 16,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
});
