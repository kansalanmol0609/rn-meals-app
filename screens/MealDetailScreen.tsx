//libs
import React, { memo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

//types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "CategoriesScreen">;

const MealDetailScreen = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The Meal Details Screen</Text>
			<Button
				title='Go Back to Categories'
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
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

export default memo(MealDetailScreen);
