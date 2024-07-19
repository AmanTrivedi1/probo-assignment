import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
} from "react-native";
import BetModal from "./BetModal";
import PortfolioScreen from "./PortfolioScreen";
import SidebarMenu from "./SidebarMenu";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [betChoice, setBetChoice] = useState(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const openModal = (choice) => {
    setBetChoice(choice);
    setModalVisible(true);
  };

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  const toggleMoreCategories = () => setShowMoreCategories(!showMoreCategories);

  const renderCategories = () => {
    const categories = ["Cricket", "Crypto", "Economy"];
    const moreCategories = ["News", "Elections", "Youtube", "Football"];

    return (
      <>
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <View style={styles.categoryIcon} />
              <Text>{item}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={toggleMoreCategories}
          >
            <Text style={styles.dropdownIcon}>
              {showMoreCategories ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
        </View>
        {showMoreCategories && (
          <View style={styles.moreCategoriesContainer}>
            {moreCategories.map((item, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={styles.categoryIcon} />
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        )}
      </>
    );
  };

  const renderHomeContent = () => (
    <ScrollView>
      {renderCategories()}

      <View style={styles.bannerContainer}>
        <View style={styles.budgetBanner}>
          <Text style={styles.bannerTitle}>Budget FY 24-25 LIVE!</Text>
          <Text style={styles.bannerLink}>KNOW MORE ▶</Text>
        </View>
        <View style={styles.expiringBanner}>
          <Text style={styles.expiringTitle}>EXPIRING SOON</Text>
          <Text style={styles.expiringSubtitle}>TRADE ON ECONOMY & NEWS ▶</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Trending now</Text>

      <ScrollView
        horizontal
        style={styles.trendingContainer}
        showsHorizontalScrollIndicator={false}
      >
        {[
          "IND-WvPAK-W",
          "Bitcoin",
          "Youtube",
          "NYSF",
          "Expiring Soon",
          "Budget FY",
        ].map((item, index) => (
          <View key={index} style={styles.trendingItem}>
            <View style={styles.trendingIcon} />
            <Text>{item}</Text>
            {["IND-WvPAK-W", "NYSF"].includes(item) && (
              <View style={styles.liveTag}>
                <Text style={styles.liveText}>LIVE</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.predictionCard}>
        <Text style={styles.tradersCount}>👥 1447 traders</Text>
        <Text style={styles.predictionQuestion}>
          India Women to win the match vs Pakistan Women?
        </Text>
        <Text style={styles.predictionStats}>
          H2H last 5 T20 : IND-W 4 , PAK-W 1, DRAW 0
        </Text>
        <Text style={styles.readMore}>Read more</Text>
        <View style={styles.predictionButtons}>
          <TouchableOpacity
            style={[styles.predictionButton, styles.yesButton]}
            onPress={() => openModal("Yes")}
          >
            <Text style={styles.yesButtonText}>Yes ₹8.4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.predictionButton, styles.noButton]}
            onPress={() => openModal("No")}
          >
            <Text style={styles.noButtonText}>No ₹1.6</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.logo}>•probo.</Text>
        <Text style={styles.balance}>₹ 8.50</Text>
      </View>

      {showPortfolio ? <PortfolioScreen /> : renderHomeContent()}

      <BetModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        question="India Women to win the match vs Pakistan Women?"
        choice={betChoice}
        amount={betChoice === "Yes" ? "8.4" : "1.7"}
        returnAmount="10.0"
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setShowPortfolio(false)}
        >
          <Text style={showPortfolio ? styles.navText : styles.activeNavText}>
            🏠
          </Text>
          <Text style={showPortfolio ? styles.navText : styles.activeNavText}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setShowPortfolio(true)}
        >
          <Text style={showPortfolio ? styles.activeNavText : styles.navText}>
            💼
          </Text>
          <Text style={showPortfolio ? styles.activeNavText : styles.navText}>
            Portfolio
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={sidebarVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleSidebar}
      >
        <SidebarMenu onClose={toggleSidebar} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 18,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  categoryItem: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 80,
    height: 80,
    padding: 12,
    gap: 10,
    item: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  moreCategoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginBottom: 8,
  },
  dropdownIcon: {
    fontSize: 24,
  },
  bannerContainer: {
    flexDirection: "row",
    padding: 16,
  },
  budgetBanner: {
    flex: 1,
    backgroundColor: "#ffeeba",
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
  },
  expiringBanner: {
    flex: 1,
    backgroundColor: "#ffc107",
    borderRadius: 8,
    padding: 16,
    marginLeft: 8,
  },
  bannerTitle: {
    fontWeight: "bold",
  },
  bannerLink: {
    color: "blue",
    marginTop: 8,
  },
  expiringTitle: {
    color: "white",
    fontWeight: "bold",
  },
  expiringSubtitle: {
    color: "white",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  trendingContainer: {
    padding: 16,
  },
  trendingItem: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  trendingIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#ddd",
    borderRadius: 16,
    marginRight: 8,
  },
  liveTag: {
    backgroundColor: "red",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginLeft: 8,
  },
  liveText: {
    color: "white",
    fontSize: 12,
  },
  predictionCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  tradersCount: {
    fontWeight: "bold",
  },
  predictionQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  predictionStats: {
    color: "gray",
  },
  readMore: {
    color: "blue",
    marginVertical: 8,
  },
  predictionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  predictionButton: {
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    flex: 1,
  },
  yesButton: {
    backgroundColor: "green",
    marginRight: 8,
  },
  noButton: {
    backgroundColor: "red",
    marginLeft: 8,
  },
  yesButtonText: {
    color: "white",
  },
  noButtonText: {
    color: "white",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "gray",
  },
  activeNavText: {
    color: "blue",
  },
  menuIcon: {
    fontSize: 24,
  },
});

export default App;
