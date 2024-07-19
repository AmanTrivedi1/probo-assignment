import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const BetModal = ({
  visible,
  onClose,
  question,
  choice,
  amount,
  returnAmount,
}) => {
  const isYes = choice === "Yes";
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>

          <View style={styles.questionContainer}>
            <View style={styles.jerseyIcon} />
            <Text style={styles.questionText}>{question}</Text>
          </View>

          <View style={styles.choiceContainer}>
            <TouchableOpacity
              style={[
                styles.choiceButton,
                isYes ? styles.activeYesChoice : styles.inactiveChoice,
              ]}
            >
              <Text
                style={
                  isYes ? styles.activeChoiceText : styles.inactiveChoiceText
                }
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.choiceButton,
                !isYes ? styles.activeNoChoice : styles.inactiveChoice,
              ]}
            >
              <Text
                style={
                  !isYes ? styles.activeChoiceText : styles.inactiveChoiceText
                }
              >
                No
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quantityContainer}>
            <Text>Quantity</Text>
            <Text style={styles.quantityValue}>1</Text>
          </View>

          <View style={styles.amountContainer}>
            <View>
              <Text style={styles.amountValue}>₹{amount}</Text>
              <Text style={styles.amountLabel}>You Put</Text>
            </View>
            <View>
              <Text style={styles.amountValue}>₹{returnAmount}</Text>
              <Text style={styles.amountLabel}>You get</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.swipeButton,
              isYes ? styles.yesButton : styles.noButton,
            ]}
          >
            <Text style={styles.swipeButtonText}>
              {isYes ? ">> Swipe for Yes" : "<< Swipe for No"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.balanceText}>Available Balance: ₹8.50</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  jerseyIcon: {
    width: 40,
    height: 40,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginRight: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  choiceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  choiceButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  activeYesChoice: {
    backgroundColor: "#007AFF",
  },
  activeNoChoice: {
    backgroundColor: "#FF3B30",
  },
  inactiveChoice: {
    backgroundColor: "#F0F0F0",
  },
  activeChoiceText: {
    color: "white",
  },
  inactiveChoiceText: {
    color: "black",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  quantityValue: {
    fontWeight: "bold",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  amountValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amountLabel: {
    color: "gray",
  },
  swipeButton: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  yesButton: {
    backgroundColor: "#007AFF",
  },
  noButton: {
    backgroundColor: "#FF3B30",
  },
  swipeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  balanceText: {
    color: "gray",
  },
});

export default BetModal;
