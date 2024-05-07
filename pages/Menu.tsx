import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Menu() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['Logout(Destrutivo)', 'Sobre'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      },
      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case 0: // Logout(Destrutivo)
            router.push("/");
            break;

          case 1: // Sobre
            router.push("/sobre");
            break;

          default:
            
            break;
        }
      }
    );
  };

  return (
    <View style={{ backgroundColor: "#FFD700", borderRadius: 8 }}>
      <Button title="Menu" onPress={onPress} color="#000" />
    </View>
  );
};
