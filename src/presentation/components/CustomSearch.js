import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "./custom_input";
import { BlackColor } from "../../utility/colorConstants";
import Search from "react-native-vector-icons/Feather";
const CustomSearch = ({
  onChange,
  value,
  placeholder,
  placeholderTextColor = "#9c9da3",
  style,
}) => {
  return (
    <View style={{ ...styles.searchContainer }}>
      <CustomInput
        style={{ ...styles.searchField, ...style }}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <Search
        name="search"
        style={{
          position: "absolute",
          right: 30,
          alignSelf: "center",
          top: 8,
        }}
        size={25}
        color="rgba(172,175,180,0.8)"
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  searchField: {
    height: 45,
    borderRadius: 10,
    paddingLeft: 20,
    color: BlackColor,
    backgroundColor: "#eaeaeb",
  },
  searchContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});
