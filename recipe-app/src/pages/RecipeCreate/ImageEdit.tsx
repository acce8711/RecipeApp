import React, { useState } from "react";

const ImageEdit = () => {
    const [imgSrc, setImgSrc] = useState<string>("");

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        console.log("currently dragging");
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        for()
        const file = event.dataTransfer.files[0];
        setImgSrc(URL.createObjectURL(file))
        console.log(imgSrc)
    }

    const style = {
        width: "500px",
        height: "500px",
        backgroundColor: "#EFEFEF"
    }
    return(
        <>
        <div 
            style={style}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
        >
            Drag Area
        </div>
        <img src={imgSrc} alt="img"/>
        </>
    )
}

export default ImageEdit;