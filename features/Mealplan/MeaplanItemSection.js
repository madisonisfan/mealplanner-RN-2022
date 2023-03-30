import MealplanTypeHeader from "./MeaplanTypeHeader";
import EmptyMealplanItem from "./EmptyMealplanItem";
import MealplanItem from "./MealplanItem";
import { useSelector } from "react-redux";
import { selectDayByIndex } from "./mealplanSlice";

const MealplanItemSection = ({ navigation, mealType, currentIndex }) => {
  const currentDay = useSelector(selectDayByIndex(currentIndex));
  const recipes = useSelector((state) => state.recipes.recipesArray);

  return (
    <>
      <MealplanTypeHeader
        navigation={navigation}
        mealplanId={currentDay.id}
        //mealType={"Breakfast"}
        mealType={mealType}
      />
      {currentDay[mealType.toLowerCase()].length === 0 && <EmptyMealplanItem />}
      {currentDay[mealType.toLowerCase()].map((recipeId, index) => {
        return (
          <MealplanItem
            key={index}
            navigation={navigation}
            recipe={recipes.find((recipe) => recipe.id === recipeId)}
            mealplanId={currentDay.id}
            //mealType={"Breakfast"}
            mealType={mealType}
          />
        );
      })}
    </>
  );
};

export default MealplanItemSection;
