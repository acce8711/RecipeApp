import React, { useState, useEffect } from "react";
import { TagType} from "../utils/types";

//hook returns an array of units
const useTags = () => {
    const [tags, setTags] = useState<TagType[]>([]);

    useEffect(() => {
        const getTags= async() => {
            const response = await fetch("http://localhost:3000/tags");
            const result: TagType[] = await response.json();
            setTags([...result]);
        }

        getTags();

    }, [])

    return {tags};
}

export default useTags;