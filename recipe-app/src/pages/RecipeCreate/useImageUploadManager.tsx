import { useState } from "react"
import { ImageURLType } from "../../utils/types"
import { nanoid } from "nanoid"
import { DragOverEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const useImageUploadManager = () => {
    const [images, setImages] = useState<ImageURLType[]>([
        {id: nanoid(), imageURL: "" }
    ])

    //function to update the image positions after each drag and drop
    const handleDragEndImage = (event: DragOverEvent) => {
        const {active, over} = event;

        if (active.id !== over?.id) {
        setImages((items) => {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over?.id);
            
            return arrayMove(items, oldIndex, newIndex);
        });
        }
    }

    //function to add an image
    const addImage = (url: string) => {
        setImages(prevValue => [...prevValue, {id: nanoid(), imageURL: url}])
    }

    //function to delete an image
    const removeImage = (id: string) => {
        setImages(prevValue => prevValue.filter(item => item.id != id))
    }

    return {
        images,
        handleDragEndImage,
        addImage,
        removeImage
    }
}

export default useImageUploadManager;