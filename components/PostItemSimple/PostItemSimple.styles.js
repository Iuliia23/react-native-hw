import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const postImage = StyleSheet.create({
  height: 240,
  marginBottom: 8,
  borderRadius: 8,
  width: windowWidth - 32,
});
export const postLabel = StyleSheet.create({
  fontSize: 16,
  fontWeight: "500",
  marginBottom: 12,
  textAlign: "left",
  fontFamily: "Roboto",
});
export const commentsWrapper = StyleSheet.create({
  flexDirection: "row",
  alignItems: "center",
  marginRight: 27,
  fontFamily: "Roboto",
});
export const commentsInner = StyleSheet.create({
  flexDirection: "row",
  marginRight: 27,
});
export const locationLabel = StyleSheet.create({
  marginLeft: 8,
  fontWeight: "400",
  fontSize: 16,
  textDecorationLine: "underline",
  fontFamily: "Roboto",
});
export const locationWrapper = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "center",
});
export const metaWrapper = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "space-between",
  width: windowWidth - 32,
});
export const commentsLabel = StyleSheet.create({
  marginLeft: 8,
  fontFamily: "Roboto",
});
export const postItem = StyleSheet.create({
  justifyContent: "center",
  alignItems: "flex-start",
  marginBottom: 35,
  width: windowWidth,
});