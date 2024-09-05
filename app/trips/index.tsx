import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { tripData } from "@/assets/data/tripData";
import TripListItem from "@/components/TripListItem";

export default function Trips() {
  return (
    <FlatList
      data={tripData}
      renderItem={({ item }) => <TripListItem trip={item} />}
    />
  );
}
