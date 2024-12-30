import React, { useState } from "react";

const ImageEdit = () => {
    const [imgSrc, setImgSrc] = useState<string|null|ArrayBuffer>("");

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        console.log("currently dragging");
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        setImgSrc(reader.result)
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
        <img src={imgSrc?.toString()}/>
        </>
    )
}

export default ImageEdit;