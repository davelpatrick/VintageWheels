import React from "react";
import { KeyboardAvoidingView, ScrollView, ImageBackground } from "react-native";
import MyForm from "../components/MyForm";
import { Stack, router } from "expo-router";

export default function App() {
  const onSubmit = (username: string, password: string) => {
    console.log("Login for: ", username, password)

    router.push("/home");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown : false
        }}
      />
      <ImageBackground
        source={require('../assets/logo.jpg')} // Insira o caminho da sua imagem de fundo aqui
        style={{ flex: 1 }}
      >
        <ScrollView>
          <MyForm title="VintageWheels" onSubmit={onSubmit} />
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
