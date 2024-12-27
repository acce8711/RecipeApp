import {
    KeyboardSensor,
    MouseSensor,
    useSensor,
    useSensors
  } from '@dnd-kit/core';
import {
    sortableKeyboardCoordinates
} from '@dnd-kit/sortable';


const useDragAndDropSensors = () => {
    //sensors for drag and drop
    const sensors = useSensors(
            useSensor(MouseSensor, {
                // Require the mouse to move by 10 pixels before activating
                activationConstraint: {
                    distance: 10,
                },
                }),
            useSensor(KeyboardSensor, {
                coordinateGetter: sortableKeyboardCoordinates,
            })
        )

    return sensors
}

export default useDragAndDropSensors;
