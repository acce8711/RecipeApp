import { useState } from "react"
import useUnits from "../../hooks/useUnits"

//Component contains the form elements for adding/editing an ingredient
const IngredientEdit = () => {
    const {units} = useUnits();
    console.log(units)

    const options: React.ReactElement[] = units.map((x) => (<option value={x} key={x}>{x}</option>))
    return (
        <div>
            <input type="numerical" placeholder="Amount"/>
            <select>
                {options}
            </select>
            <input placeholder="ingredient"/>
        </div>
    )
}

export default IngredientEdit