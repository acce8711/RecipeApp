import IngredientEdit from "./IngredientEdit/IngredientEdit"
import useRecipeCreate from "./useIngredientManager"

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {
    DndContext,
    closestCorners
  } from '@dnd-kit/core';

  import {
    SortableContext,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';

  import {
    restrictToVerticalAxis,
    } from '@dnd-kit/modifiers';

const RecipeCreate = () => {
    const { editor } = useCurrentEditor()

    const {ingredients, 
            sensors,
            handleDragEnd,
            handleIngredientNameChange, 
            handleIngredientMeasurementChange, 
            handleIngredientUnitChange, 
            removeIngredient,
            addIngredient} = useRecipeCreate();

    const ingredientUI = ingredients.map(item => <IngredientEdit 
                                                        key={item.id} 
                                                        info={item} 
                                                        ingredientNameChange={handleIngredientNameChange}
                                                        ingredientMeasurementChange={handleIngredientMeasurementChange}
                                                        ingredientUnitChange={handleIngredientUnitChange}
                                                        removeIngredient={() => removeIngredient(item.id)}/>)
    const ingredientKeys = ingredients.map(item => item.id)                                                    
    return (
        <>
        <DndContext modifiers={[restrictToVerticalAxis]} collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={ingredientKeys} strategy={verticalListSortingStrategy}>
                {ingredientUI}
            </SortableContext>
        </DndContext>
            <p>Hi, I am RecipeCreate</p>
            <button onClick={addIngredient}>Add</button>

            <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={
            !editor?.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor?.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>

        </>

        
    )
}

export default RecipeCreate 