import { useState } from "react"
import { IngredientType } from "../../utils/types"
import { nanoid } from 'nanoid';
import { DragOverEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';


const useIngredientManager = () => {
    const [ingredients, setIngredients] = useState<IngredientType[]>([
       {id: nanoid(), unitID: "0", measurement: "", ingredientName: ""}
    ])

    //function to update the ingredient positions after each drag and drop
    const handleDragEndIngredient = (event: DragOverEvent) => {
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
        handleDragEndIngredient,
        handleIngredientNameChange,
        handleIngredientMeasurementChange,
        handleIngredientUnitChange,
        removeIngredient,
        addIngredient,
        setIngredients,
    }
}

export default useIngredientManager;