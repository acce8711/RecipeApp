
//API imports
import useTags from "../../hooks/useTags";
import useUnits from "../../hooks/useUnits";

//Hooks
import useIngredientManager from "./useIngredientManager"
import useInstructionManager from "./useInstructionManager";
import useDurationManager from "./useDurationManager";
import useServingsManager from "./useServingsManager";

//Components
import IngredientEdit from "./IngredientEdit/IngredientEdit"
import InstructionEdit from "./InstructionEdit/InstructionEdit";
import DragAndDrop from "../../shared components/DragAndDrop";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const RecipeCreate = () => {

    //ingredients
    const {ingredients, 
            handleDragEndIngredient,
            handleIngredientNameChange, 
            handleIngredientMeasurementChange, 
            handleIngredientUnitChange, 
            removeIngredient,
            addIngredient} = useIngredientManager();

    //units 
    const {units} = useUnits();

    //tags 
    const {tags} = useTags();

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
    
    //servings
    const {servings,
            handleServingsChange} = useServingsManager();

    //ingredient UI elements
    const ingredientUI = ingredients.map(item => <IngredientEdit 
                                                        key={item.id} 
                                                        info={item} 
                                                        units={units}
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

            {/* Servings input */}
            <TextField 
            type="number"
            value={servings || ""}
            onChange={handleServingsChange}/>

            {/* Tags input */}
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={tags}
                disableCloseOnSelect
                getOptionLabel={(option) => option.tagName}
                renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                    <li key={key} {...optionProps}>
                        <Checkbox
                        style={{ marginRight: 8 }}
                        checked={selected}
                        />
                        {option.tagName}
                    </li>
                    );
                }}
                style={{ width: 500 }}
                renderInput={(params) => (
                    <TextField {...params} label="Checkboxes" placeholder="Favorites" />
                )}
            />
            
        </>

        
    )
}

export default RecipeCreate 