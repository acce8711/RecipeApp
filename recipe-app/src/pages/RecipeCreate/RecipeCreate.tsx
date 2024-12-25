import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useRecipeCreate from "./useRecipeCreate"

import {
    DndContext,
    KeyboardSensor,
    MouseSensor,
    useSensor,
    useSensors,
    UniqueIdentifier,
    DragOverEvent,
    closestCorners
  } from '@dnd-kit/core';

  import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';

  import {
    restrictToVerticalAxis,
    restrictToHorizontalAxis,
    restrictToWindowEdges
    } from '@dnd-kit/modifiers';

const RecipeCreate = () => {
    const {ingredients, 
            handleIngredientNameChange, 
            handleIngredientMeasurementChange, 
            handleIngredientUnitChange, 
            removeIngredient,
            addIngredient,
            setIngredients} = useRecipeCreate();

    const sensors = useSensors(
        useSensor(MouseSensor, {
            // Require the mouse to move by 10 pixels before activating
            activationConstraint: {
              distance: 10,
            },
          }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const handleDragEnd = (event: DragOverEvent) => {
        const {active, over} = event;

        if (active.id !== over?.id) {
        setIngredients((items) => {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over?.id);
            
            return arrayMove(items, oldIndex, newIndex);
        });
        }
    }

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