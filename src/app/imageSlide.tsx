"use client"

import styles from "./imageSlide.module.css"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function ImageSlide(content: { className: string, content: {Image: string, Description: string}[], name: string}) {
    let imgCount = 0;

    const images = content.content;
    const url = "/" + content.name.replace(" ", "") + "/";
    const [text, setText] = useState(images[imgCount].Description);

    useEffect(() => {
        setText(images[imgCount].Description);
    }, [images])

    const changeAnimation = (it: number) => {
        const img1 = document.querySelector("[alt='"+images[imgCount].Image+"']");
        const img2 = document.querySelector("[alt='"+images[Math.abs((imgCount + it) % images.length)].Image+"']");

        img1?.classList.remove(styles.shown);
        img2?.classList.add(styles.shown);
        
        imgCount = Math.abs((imgCount + it) % images.length);
        setText(images[imgCount].Description);
    };

    return (
        <div className={content.className}>
            <div className={styles.controls}>
                <button onClick={() => changeAnimation(-1)}>Prv</button>
                <button onClick={() => changeAnimation(1)}>Nxt</button>
            </div>
            <div className={styles.images}>
                {images.map(i => <Image className={styles.image + " " + (images[0].Image == i.Image ? styles.shown : "")} key={i.Image} src={url + i.Image} alt={i.Image} width={1280} height={720} /> )}
            </div>
            <p className={styles.imageText}>{text}</p>
        </div>
    )
}