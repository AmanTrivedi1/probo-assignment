import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Icon = ({ name }) => <Text style={styles.icon}>{name}</Text>;

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Live Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Closed Events</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.filterButton}>
        {/* <Icon name="Filter" /> */}
        <Text style={styles.filterText}>Filters</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.portfolioCard}>
          <View style={styles.portfolioHeader}>
            <Icon name="Briefcase" />
            <Text style={styles.portfolioTitle}>Trade Portfolio</Text>
            <Icon name="Info" />
          </View>
          <View style={styles.portfolioValues}>
            <View>
              <Text style={styles.valueAmount}>₹6.5</Text>
              <Text style={styles.valueLabel}>Investment</Text>
            </View>
            <View>
              <Text style={styles.valueAmount}>₹5</Text>
              <Text style={styles.valueLabel}>Current Value</Text>
            </View>
          </View>
          <Text style={styles.liveGains}>
            Live Gains: - ₹1.5 <Icon name="ArrowDown" />
          </Text>
        </View>

        <EventCard
          title="Donald Trump to win the 2024 U.S. Presidential elections?"
          invested={3}
          gains={0}
          icon="Podium"
        />

        <EventCard
          title="NEET UG 2024 to be reconducted for all the students?"
          invested={3.5}
          gains={-1.5}
          icon="Book"
        />
      </ScrollView>
    </View>
  );
};

const EventCard = ({ title, invested, gains, icon }) => (
  <View style={styles.eventCard}>
    <Text style={styles.matchedLabel}>Matched</Text>
    <View style={styles.eventContent}>
      <View style={styles.iconContainer}>
        <Icon name={icon} />
      </View>
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{title}</Text>
        <View style={styles.eventStats}>
          <Text style={styles.eventStatsText}>Invested ₹{invested}</Text>
          <Text
            style={[styles.eventStatsText, gains < 0 && styles.negativeGains]}
          >
            • Gains {gains >= 0 ? "₹" : "-₹"}
            {Math.abs(gains)}
          </Text>
        </View>
      </View>
    </View>
    <TouchableOpacity style={styles.exitButton}>
      <Text style={styles.exitButtonText}>Exit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "white",
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4A90E2",
  },
  tabText: {
    color: "#888",
  },
  activeTabText: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
    margin: 16,
  },
  filterText: {
    color: "white",
    marginLeft: 4,
  },
  portfolioCard: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    padding: 16,
  },
  portfolioHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  portfolioTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  portfolioValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  valueAmount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  valueLabel: {
    color: "#888",
  },
  liveGains: {
    color: "red",
  },
  eventCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
  },
  matchedLabel: {
    color: "#4CAF50",
    marginBottom: 8,
  },
  eventContent: {
    flexDirection: "row",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF0E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  eventStats: {
    flexDirection: "row",
  },
  eventStatsText: {
    color: "#888",
    fontSize: 12,
  },
  negativeGains: {
    color: "red",
  },
  exitButton: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  exitButtonText: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
    color: "#888",
  },
});

export default PortfolioScreen;
