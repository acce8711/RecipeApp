import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useRecipeCreate from "./useRecipeCreate"

const RecipeCreate = () => {
    const {ingredients, 
            handleIngredientNameChange, 
            handleIngredientMeasurementChange, 
            handleIngredientUnitChange, 
            removeIngredient} = useRecipeCreate();

    const ingredientsUI = ingredients.map(item => <IngredientEdit 
                                                        key={item.id} 
                                                        info={item} 
                                                        ingredientNameChange={handleIngredientNameChange}
                                                        ingredientMeasurementChange={handleIngredientMeasurementChange}
                                                        ingredientUnitChange={handleIngredientUnitChange}
                                                        removeIngredient={() => removeIngredient(item.id)}/>)
    return (
        <>
            <p>Hi, I am RecipeCreate</p>
            {
                ingredientsUI
            }
        </>
    )
}

export default RecipeCreate 