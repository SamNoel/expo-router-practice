import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Page</Text>
      <Button title="Back to Home Page" onPress={() => router.back()} />
    </View>
  );
}
