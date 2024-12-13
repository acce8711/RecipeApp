import { useState } from "react"
import { IngredientType } from "../../utils/types"
import { nanoid } from 'nanoid';

const useRecipeCreate = () => {
    const [ingredients, setIngredients] = useState<IngredientType[]>([
       {id: nanoid(), unitID: 0, measurement: null, ingredientName: null}
    ])

    const handleIngredientMeasurementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name, type} = event.target

        if(type == "number")
            setIngredients(prevValue => 
                prevValue.map(i => i.id == name ? {...i, ingredientName: value } : {...i})
            )
    } 
    return{
        ingredients, 
        handleIngredientMeasurementChange
    }
}

export default useRecipeCreate;