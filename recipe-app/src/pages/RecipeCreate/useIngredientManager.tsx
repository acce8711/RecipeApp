import { useState } from "react"
import { IngredientType } from "../../utils/types"
import { nanoid } from 'nanoid';
import {
    KeyboardSensor,
    MouseSensor,
    useSensor,
    useSensors,
    DragOverEvent,
  } from '@dnd-kit/core';
import {
    arrayMove,
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';


const useRecipeCreate = () => {
    const [ingredients, setIngredients] = useState<IngredientType[]>([
       {id: nanoid(), unitID: "0", measurement: "", ingredientName: ""}
    ])

    //sensors for drag and drop
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
    
    //function to update the ingredient positions after each drag and drop
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

    //function to update the ingredient Name
    const handleIngredientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setIngredients(prevValue => 
            prevValue.map(i => i.id === name ? {...i, ingredientName: value } : {...i})
        )
    } 

    //function to update the ingredient measurement 
    const handleIngredientMeasurementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setIngredients(prevValue => 
            prevValue.map(i => i.id === name ? {...i, measurement: value } : {...i})
        )
    } 

    //function to update the ingredient unit
    const handleIngredientUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value, name} = event.target
        console.log(value)

        setIngredients(prevValue => 
            prevValue.map(i => i.id === name ? {...i, unitID: value } : {...i})
        )
    } 

    //function to delete an ingredient
    const removeIngredient = (id: string) => {
        setIngredients(prevValue => prevValue.filter(item => item.id !== id))
    }

    //function to add an ingredient
    const addIngredient = () => {
        setIngredients(prevValue => [...prevValue, {id: nanoid(), unitID: "0", measurement: "", ingredientName: ""}])
    }

    return {
        ingredients,
        sensors,
        handleDragEnd,
        handleIngredientNameChange,
        handleIngredientMeasurementChange,
        handleIngredientUnitChange,
        removeIngredient,
        addIngredient,
        setIngredients,
    }
}

export default useRecipeCreate;