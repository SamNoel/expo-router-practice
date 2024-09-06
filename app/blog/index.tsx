import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

export default function Blog() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Blog Page</Text>
      <Button title="Go to Blog 1" onPress={() => router.push("/blog/1")} />
      <Button title="Go to Blog 2" onPress={() => router.push("/blog/2")} />
      <Button
        title="Go to Blog 3"
        onPress={() => router.push("/blog/3?author=John")}
      />
      <Link
        href={{
          pathname: "/blog/[id]",
          params: { id: 4, author: "Jenny" },
        }}
      >
        <Text>Go to Blog 4</Text>
      </Link>
      <Button title="Back to Home Page" onPress={() => router.back()} />
    </View>
  );
}
