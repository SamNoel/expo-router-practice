import { View, Text, Button } from "react-native";
import React from "react";
import { router, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list" size={24} color={color} />
          ),
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          headerRight: () => (
            <Button
              onPress={() => router.push("/feed/feedSub")}
              title="Add Post"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
}
