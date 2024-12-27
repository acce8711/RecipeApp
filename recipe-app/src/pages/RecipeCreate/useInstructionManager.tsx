import { useState } from "react"
import { InstructionType } from "../../utils/types"
import { nanoid } from 'nanoid';
import { DragOverEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';


const useInstructionManager = () => {
    const [instructions, setInstructions] = useState<InstructionType[]>([
           {id: nanoid(), instruction: ""}
        ])

    //function to update the instruction positions after each drag and drop
    const handleDragEndInstruction = (event: DragOverEvent) => {
        const {active, over} = event;

        if (active.id !== over?.id) {
        setInstructions((items) => {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over?.id);
            
            return arrayMove(items, oldIndex, newIndex);
        });
        }
    }

    //function to update the instruction content
    const handleInstructionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value, name} = event.target

        console.log("change")

        setInstructions(prevValue => 
            prevValue.map(i => i.id === name ? {...i, instruction: value } : {...i})
        )
    } 

    //function to delete an instruction
    const removeInstruction = (id: string) => {
        setInstructions(prevValue => prevValue.filter(item => item.id !== id))
    }

    //function to add an instruction
    const addInstruction = () => {
        setInstructions(prevValue => [...prevValue, {id: nanoid(), instruction: ""}])
    }

    return { 
        instructions,
        handleDragEndInstruction,
        handleInstructionChange,
        removeInstruction,
        addInstruction
    }
}

export default useInstructionManager;