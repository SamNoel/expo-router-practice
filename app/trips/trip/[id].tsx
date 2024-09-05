import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, Redirect } from "expo-router";
import { tripData } from "@/assets/data/tripData";

export default function TripItem() {
  const { id } = useLocalSearchParams();

  const trip = tripData.filter((x) => x.id === Number(id))[0];

  return <Text>Test</Text>;
}
