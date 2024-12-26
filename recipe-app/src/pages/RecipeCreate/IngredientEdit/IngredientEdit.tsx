import useUnits from "../../../hooks/useUnits"
import { IngredientType } from "../../../utils/types"
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

interface Props {
    info: IngredientType;
    ingredientNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ingredientMeasurementChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ingredientUnitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    removeIngredient: () => void;
}

//Component contains the form elements for adding/editing an ingredient
const IngredientEdit = ({info, ingredientNameChange, ingredientMeasurementChange, ingredientUnitChange, removeIngredient}: Props) => {
    const {units} = useUnits();
    
    //drag and drop
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: info.id});

    const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    };

    //creating UI for the available units
    const options = units.map((x) => (<option value={x.id} key={x.id}>{x.unit}</option>))
    
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <input 
                type="number" 
                placeholder="Amount" 
                name={info.id}
                value={info.measurement}
                onChange={ingredientMeasurementChange}
            />
            <select name={info.id} value={info.unitID} onChange={ingredientUnitChange}>
                {options}
            </select>
            <input 
                type="text" 
                placeholder="ingredient" 
                name={info.id}
                value={info.ingredientName}
                onChange={ingredientNameChange}
            />
            <button onClick={removeIngredient}>Delete</button>
            
        </div>
    )
}

export default IngredientEdit