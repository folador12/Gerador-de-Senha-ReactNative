import React from "react";
import {Text, StyleSheet, Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import{useState} from 'react';

export function PasswordItem({ data, removePassword }) {


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Pressable style={styles.container} onLongPress={removePassword}>
      <Text style={styles.password}>{showPassword ? data : "••••••••"}</Text>
      <Ionicons
        name={showPassword ? "eye-off-outline" : "eye-outline"}
        style={styles.visible}
        onPress={togglePasswordVisibility}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0e0e0e",
    width: "100%",
    borderRadius: 5,
    padding: 14,
    marginBottom: 14,
  },
  password: {
    color: "#fff",
  },
  visible: {
    fontSize: 18,
    color: "#fff",
  },
});
