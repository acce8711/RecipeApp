import {
    KeyboardSensor,
    MouseSensor,
    useSensor,
    useSensors,
    DndContext,
    closestCorners,
    UniqueIdentifier,
    DragOverEvent,
  } from '@dnd-kit/core';

  import {
    SortableContext,
    verticalListSortingStrategy,
    sortableKeyboardCoordinates
  } from '@dnd-kit/sortable';

  import {
    restrictToVerticalAxis,
    } from '@dnd-kit/modifiers';

interface Props {
    itemKeys: UniqueIdentifier[];
    itemUI: JSX.Element[];
    handleDragEnd: (event: DragOverEvent) => void
}

const DragAndDrop = ({itemKeys, itemUI, handleDragEnd}: Props) => {
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

    return (
        <DndContext modifiers={[restrictToVerticalAxis]} collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={itemKeys} strategy={verticalListSortingStrategy}>
                {itemUI}
            </SortableContext>
        </DndContext>
    )
}

export default DragAndDrop;