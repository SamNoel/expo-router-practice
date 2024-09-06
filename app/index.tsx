import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
      <Button
        title="Go to About Page"
        onPress={() => router.navigate("/about")}
      />
      <Button
        title="Go to Blog Page"
        onPress={() => router.navigate("/blog")}
      />
      <Button
        title="Go to Contact Page"
        onPress={() => router.navigate("/contact")}
      />
      <Button title="Go to Tabs" onPress={() => router.navigate("/feed")} />
    </View>
  );
}
