
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shop: {
    margin: 10,
  },
  reviewContainer: {
    width: CONTAINER_WIDTH,
    padding: PADDING
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dsContainer: {
    margin: 16,
  },
  shopContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  sdContainer: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * .7,
  },
  nameText: {
    fontSize: 16,
    color: "#000",
    marginTop: 8,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  nameContainer: {
    position: "absolute",
    left: 16,
    bottom: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  placeText: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
  },
  place: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 16,
  },
  star: {
    color: '#800',
    marginRight: 4,
  },
  scoreText: {
    color: '#000',
    fontWeight: 'bold',
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 250,
  },
});
