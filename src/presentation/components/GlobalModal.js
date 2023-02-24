import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COMPLETE_FULLKYC_BANNER_SCREEN } from "../../utility/valueConstants";
import CompleteKycScreen from "./CompleteKycScreen";
import { useDispatch, useSelector } from "react-redux";
import { showGlobalModal } from "../../data/redux/slice/globalModalSlice";

const GlobalModal = ({ kycStatus }) => {
  const navigation = useNavigation();
  const isVisible = useSelector((state) => state.globalModalSlice.visible);
  const dispatch = useDispatch();

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CompleteKycScreen
            onPress={() => {
              // setKycStatus(false);
              navigation.navigate(COMPLETE_FULLKYC_BANNER_SCREEN, {
                isBackRequired: true,
              });
              dispatch(showGlobalModal(false));
            }}
            onClickClose={() => {
              dispatch(showGlobalModal(false));
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GlobalModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
