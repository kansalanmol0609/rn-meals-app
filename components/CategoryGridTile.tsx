//libs
import React, { memo, useCallback } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	StyleSheet,
	Platform,
	TouchableOpacityProps,
	TouchableNativeFeedbackProps,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//types
import type { Category } from "../models/category";
import { RootStackParamList } from "../navigation/types";

type Props = {
	item: Category;
};

const CategoryGridTile = ({ item }: Props): JSX.Element => {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<RootStackParamList, "CategoriesScreen">
		>();

	const handlePress = useCallback(() => {
		navigation.navigate("CategoryMeals", {
			categoryId: item.id,
		});
	}, []);

	let TouchComponent: React.ComponentType<
		TouchableOpacityProps | TouchableNativeFeedbackProps
	> = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchComponent onPress={handlePress} style={{ flex: 1 }}>
				<View
					style={{ ...styles.container, ...{ backgroundColor: item.color } }}
				>
					<Text style={styles.title} numberOfLines={2}>
						{item.title}
					</Text>
				</View>
			</TouchComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: "black", //ios
		shadowOpacity: 0.26, //ios
		shadowOffset: { width: 0, height: 2 }, //ios
		shadowRadius: 10, //ios
		elevation: 3, //android
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		textAlign: "right",
	},
});

export default memo(CategoryGridTile);
