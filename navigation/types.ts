// for each route - name vs params
export type MealsStackParamList = {
  CategoriesScreen: undefined;
  CategoryMeals: {categoryId: string};
  MealDetail: {mealId: string};
};

export type FavoritesStackParamList = {
  Favorites: undefined;
  MealDetail: {mealId: string};
};

export type FiltersStackParamList = {
  Filters: undefined;
};

export type TabsNavigatorParamList = {
  Meals: undefined;
  FavoritesNavigator: undefined;
};

export type MainNavigatorParamList = {
  TabsNavigator: undefined;
  FiltersNavigator: undefined;
};
