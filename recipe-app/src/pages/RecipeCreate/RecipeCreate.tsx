import useIngredientManager from "./useIngredientManager"
import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useInstructionManager from "./useInstructionManager";
import InstructionEdit from "./InstructionEdit/InstructionEdit";
import DragAndDrop from "../../shared components/DragAndDrop";

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

            
        </>

        
    )
}

export default RecipeCreate 