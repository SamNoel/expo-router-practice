import { View, Text, DrawerLayoutAndroidBase } from "react-native";
import React from "react";
import Drawer from "expo-router/drawer";
import { Stack, Tabs } from "expo-router";

export default function _layout() {
  return (
    // <Stack>
    //
    //   <Stack.Screen
    //     name="trip/[id]"
    //     options={{
    //       // drawerLabel: "Individual Trip",
    //       title: "Individual Trip",
    //       // drawerItemStyle: { display: "none" },
    //     }}
    //   />
    // </Stack>
    <Stack>
      <Stack.Screen
        name="index.tsx"
        options={{
          // drawerLabel: "Trips",
          title: "Trips",
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
