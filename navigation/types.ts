// for each route - name vs params
export type MealsStackParamList = {
  CategoriesScreen: undefined;
  CategoryMeals: {categoryId: string};
  MealDetail: {mealId: string};
};

export type RootNavigatorParamList = {
  Meals: undefined;
  Favorites: undefined;
};
