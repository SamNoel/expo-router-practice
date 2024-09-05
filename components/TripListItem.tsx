import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const TripListItem = ({ trip }) => {
  return (
    <Link href={`/trips/trip/${trip.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.title}>{trip.name}</Text>
        <Text style={styles.description}>{trip.description}</Text>
      </Pressable>
    </Link>
  );
};

export default TripListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    flex: 1, //equally splits the space among the siblings
    maxWidth: "50%", //covers edge case if there is an odd numbered list, so last item only takes 50%
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#f4f4f4",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1, //auto calculated based on width
  },
});
