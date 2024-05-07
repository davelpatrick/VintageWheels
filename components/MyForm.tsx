import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface MyFormProps {
  onSubmit: (username: string, password: string) => void;
  title: string;
}

export default function MyForm({ onSubmit, title }: MyFormProps) {
  const [username, setUsername] = useState("teste");
  const [password, setPassword] = useState("1234");

  const cannotSubmit = username.length === 0 || password.length === 0;

  const handlePress = () => {
    onSubmit(username, password);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{title}</Text>

      <TextInput
        placeholder="username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        secureTextEntry={true}
        placeholder="****"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFD700" }]}
        onPress={handlePress}
        disabled={cannotSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
    padding: 15,
    backgroundColor: "#a6051a",
  },
  logo: {
    textAlign: "center",
    fontSize: 30,
    // fontFamily: 'Cinzel'
  },
  input: {
    backgroundColor: "white",
    height: 30,
    marginBottom: 16,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#ffeb00",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: 'Cinzel',
  },
  buttonText: {
    fontSize: 16,
    color: "#111111",
    // fontFamily: "Cinzel",
  },
});
