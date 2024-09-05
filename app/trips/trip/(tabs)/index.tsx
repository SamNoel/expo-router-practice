//this will redirect to the /overview page as the starting point for a trip
import { Redirect } from "expo-router";

export default function TabIndex() {
  return <Redirect href={"/trips/trip/overview"} />;
}
