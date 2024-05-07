import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Stack } from "expo-router";
import MenuSobre from "../pages/MenuSobre";

export default function Sobre() {
  const abrirGithub = () => {
    Linking.openURL("https://github.com/davelpatrick/pdm-avaliacao");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => <MenuSobre />,
        }}
      />

      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.subtitle}>Meu App</Text>
      <Text style={styles.subtitle}>Desenvolvido por</Text>
      <Text style={styles.title}>Patrick Davel</Text>
      <TouchableOpacity onPress={abrirGithub}>
        <Text style={styles.githubLink}>Meu GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontStyle: "italic",
  },
  githubLink: {
    fontSize: 16,
    color: "blue",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
