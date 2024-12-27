import useIngredientManager from "./useIngredientManager"
import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useInstructionManager from "./useInstructionManager";
import InstructionEdit from "./InstructionEdit/InstructionEdit";
import useDurationManager from "./useDurationManager";
import DragAndDrop from "../../shared components/DragAndDrop";
import { TextField } from "@mui/material";

import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

const RecipeCreate = () => {

    //ingredients
    const {ingredients, 
            handleDragEndIngredient,
            handleIngredientNameChange, 
            handleIngredientMeasurementChange, 
            handleIngredientUnitChange, 
            removeIngredient,
            addIngredient} = useIngredientManager();

    //instructions
    const {instructions,
            handleDragEndInstruction,
            handleInstructionChange,
            removeInstruction,
            addInstruction} = useInstructionManager();

    //minutes and hours
    const {minutes, 
            hours,
            handleHourChange,
            handleMinuteChange} = useDurationManager();

    //ingredient UI elements
    const ingredientUI = ingredients.map(item => <IngredientEdit 
                                                        key={item.id} 
                                                        info={item} 
                                                        ingredientNameChange={handleIngredientNameChange}
                                                        ingredientMeasurementChange={handleIngredientMeasurementChange}
                                                        ingredientUnitChange={handleIngredientUnitChange}
                                                        removeIngredient={() => removeIngredient(item.id)}/>)
    const ingredientKeys = ingredients.map(item => item.id)                                
    
    //instruction UI elements
    const instructionUI = instructions.map((item, index) => <InstructionEdit 
        key={item.id} 
        info={item} 
        position={index + 1}
        instructionChange={handleInstructionChange}
        removeInstruction={() => removeInstruction(item.id)}/>)
    const instructionKeys = instructions.map(item => item.id)  

    return (
        <>
        
            <p>Hi, I am RecipeCreate</p>

            {/* Render Ingredients */}
            <DragAndDrop itemKeys={ingredientKeys} itemUI={ingredientUI} handleDragEnd={handleDragEndIngredient}/>
            <button onClick={addIngredient}>Add</button>

            {/* Render Instructions */}
            <DragAndDrop itemKeys={instructionKeys} itemUI={instructionUI} handleDragEnd={handleDragEndInstruction}/>
            <button onClick={addInstruction}>Add</button>

            {/* Minute input */}
            <TextField 
            type="number"
            value={minutes || ""}
            onChange={handleMinuteChange}/>

            {/* Hour input */}
            <TextField 
            type="number"
            value={hours || ""}
            onChange={handleHourChange}/>

            
        </>

        
    )
}

export default RecipeCreate 