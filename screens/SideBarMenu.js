
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuItem = ({ icon, label, hasArrow = true }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuItemContent}>
      <Text style={styles.menuItemIcon}>{icon}</Text>
      <Text style={styles.menuItemLabel}>{label}</Text>
    </View>
    {hasArrow && <Text style={styles.menuItemArrow}>›</Text>}
  </TouchableOpacity>
);

const SidebarMenu = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>•probo.</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <MenuItem icon="🎧" label="Help" />
        <MenuItem icon="⚙️" label="Terms & Conditions" />
        <MenuItem icon="🌐" label="App Language" />
        <MenuItem icon="❓" label="Probo Course" />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
          <Text style={styles.logoutIcon}>↪️</Text>
        </TouchableOpacity>
        <Text style={styles.madeInIndia}>Made in India 🇮🇳</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuContainer: {
    flex: 1,
    paddingTop: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  menuItemLabel: {
    fontSize: 16,
  },
  menuItemArrow: {
    fontSize: 20,
    color: "#888",
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutIcon: {
    fontSize: 20,
  },
  madeInIndia: {
    fontSize: 14,
    color: "#888",
  },
});

export default SidebarMenu;
