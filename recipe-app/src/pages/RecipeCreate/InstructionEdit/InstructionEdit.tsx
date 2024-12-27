import { InstructionType } from "../../../utils/types";
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

interface Props {
    info: InstructionType;
    position: number
    instructionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    removeInstruction: () => void;
}

const InstructionEdit = ({info, position, instructionChange, removeInstruction}: Props) => {

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

    return (
        <div ref={setNodeRef} style={style}>
            <div {...attributes} {...listeners}>hold and drag</div>
            <h3>STEP {position}</h3>
            <textarea 
                id={info.id} 
                name={info.id}
                value={info.instruction}
                onChange={instructionChange}
            >
            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
            </textarea>
            <button onClick={removeInstruction}>Delete</button>
        </div>
    )
}

export default InstructionEdit;