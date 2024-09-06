import { View, Text, Button } from "react-native";
import React from "react";
import { router, useLocalSearchParams, Stack } from "expo-router";

export default function BlogPage() {
  const { id, author } = useLocalSearchParams();

  return (
    //Stack.Screen here customizes the header within the page itself rather than in the _layout file
    <>
      <Stack.Screen options={{ headerTitle: `Blog ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Blog Post Details {id}</Text>
        <Text>Written by {author}</Text>
        <Button
          title="Back to Home Page"
          onPress={() => router.navigate("/")}
        />
      </View>
    </>
  );
}
