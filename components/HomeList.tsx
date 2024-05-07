import React from "react";
import { View, SectionList, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../services/data";
import { Stack } from "expo-router";
import Menu from "../pages/Menu";

interface CarModel {
  id: number;
  brand: string;
  model: string;
  year: number;
}

interface MyHomeList {
  title: string;
}

const CarSectionList = ({ title }: MyHomeList) => {
  const carModelsByBrand = data.reduce<{ [key: string]: CarModel[] }>(
    (acc, curr) => {
      acc[curr.brand] = acc[curr.brand] || [];
      acc[curr.brand].push(curr);
      return acc;
    },
    {}
  );

  const sections = Object.keys(carModelsByBrand).map((brand) => ({
    title: brand,
    data: carModelsByBrand[brand],
  }));

  const renderItem = ({ item }: { item: CarModel }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        ID: {item.id} --- Nome: {item.model} --- Ano: {item.year}
      </Text>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <menu {...props} />,
          headerRight: () => <Menu />,
        }}
      />

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeb00",
  },
  sectionHeader: {
    backgroundColor: "#a6051a",
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 50,
    color: "#111111",
    // fontFamily: "fantasy",
  },
  item: {
    padding: 10,
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
    color: "#111111",
    // fontFamily: "fantasy",
  },
});

export default CarSectionList;
