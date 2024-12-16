import { useState } from "react"
import { IngredientType } from "../../utils/types"
import { nanoid } from 'nanoid';

const useRecipeCreate = () => {
    const [ingredients, setIngredients] = useState<IngredientType[]>([
       {id: nanoid(), unitID: "0", measurement: "", ingredientName: ""}
    ])

    //function to update the ingredient Name
    const handleIngredientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setIngredients(prevValue => 
            prevValue.map(i => i.id == name ? {...i, ingredientName: value } : {...i})
        )
    } 

    //function to update the ingredient measurement 
    const handleIngredientMeasurementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setIngredients(prevValue => 
            prevValue.map(i => i.id == name ? {...i, measurement: value } : {...i})
        )
    } 

    //function to update the ingredient unit
    const handleIngredientUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value, name} = event.target
        console.log(value)

        setIngredients(prevValue => 
            prevValue.map(i => i.id == name ? {...i, unitID: value } : {...i})
        )
    } 

    //function to delete the 

    return {
        ingredients, 
        handleIngredientNameChange,
        handleIngredientMeasurementChange,
        handleIngredientUnitChange
    }
}

export default useRecipeCreate;