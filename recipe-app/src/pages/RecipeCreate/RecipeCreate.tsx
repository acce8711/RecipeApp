import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useRecipeCreate from "./useIngredientManager"

import {
    DndContext,
    closestCorners
  } from '@dnd-kit/core';

  import {
    SortableContext,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';

  import {
    restrictToVerticalAxis,
    } from '@dnd-kit/modifiers';

const RecipeCreate = () => {
    const {ingredients, 
            sensors,
            handleDragEnd,
            handleIngredientNameChange, 
            handleIngredientMeasurementChange, 
            handleIngredientUnitChange, 
            removeIngredient,
            addIngredient} = useRecipeCreate();

    const ingredientUI = ingredients.map(item => <IngredientEdit 
                                                        key={item.id} 
                                                        info={item} 
                                                        ingredientNameChange={handleIngredientNameChange}
                                                        ingredientMeasurementChange={handleIngredientMeasurementChange}
                                                        ingredientUnitChange={handleIngredientUnitChange}
                                                        removeIngredient={() => removeIngredient(item.id)}/>)
    const ingredientKeys = ingredients.map(item => item.id)                                                    
    return (
        <>
        <DndContext modifiers={[restrictToVerticalAxis]} collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={ingredientKeys} strategy={verticalListSortingStrategy}>
                {ingredientUI}
            </SortableContext>
        </DndContext>
            <p>Hi, I am RecipeCreate</p>
            <button onClick={addIngredient}>Add</button>
        </>
    )
}

export default RecipeCreate 