//libs
import React, { memo, useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

//types
import { CATEGORIES } from "../data/dummy-data";
import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "CategoryMeals">;

const CategoryMealsScreen = ({ navigation, route }: Props): JSX.Element => {
	const { categoryId } = route.params;

	const selectedCategory = CATEGORIES.find(
		(category) => category.id === categoryId
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: `${selectedCategory?.title} Meals`,
		});
	}, []);

	return (
		<View style={styles.screen}>
			<Text>The Category Meals Screen</Text>
			<Text>{selectedCategory?.title}</Text>
			<Button
				title='Go to Details'
				onPress={() => {
					// .push() can be used to push same screen.
					navigation.navigate("MealDetail");
				}}
			/>
			<Button title='Go Back' onPress={() => navigation.pop()} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default memo(CategoryMealsScreen);
