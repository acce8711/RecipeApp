import useIngredientManager from "./useIngredientManager"
import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useUnits from "../../hooks/useUnits";
import useInstructionManager from "./useInstructionManager";
import InstructionEdit from "./InstructionEdit/InstructionEdit";
import useDurationManager from "./useDurationManager";
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

            {/* Tags input */}
            {/* <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                    <li key={key} {...optionProps}>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                        />
                        {option.title}
                    </li>
                    );
                }}
                style={{ width: 500 }}
                renderInput={(params) => (
                    <TextField {...params} label="Checkboxes" placeholder="Favorites" />
                )}
            /> */}
            
        </>

        
    )
}

export default RecipeCreate 