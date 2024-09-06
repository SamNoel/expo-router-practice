import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

export default function Page() {
  return (
    //The Stack component literally just adds a header to each page. Each of these page headers
    //can be modified by adding a Stack.Screen component and pointing it to a particular screen
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222222",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button title="Contact" onPress={() => router.push("/contact")} />
          ),
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen
        name="contact"
        options={{ headerTitle: "Contact", presentation: "modal" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Tabs" }} />
    </Stack>
  );
}
