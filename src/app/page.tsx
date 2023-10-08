"use client";

import { useState } from "react";
import stackItems from "./utils/stackItems";
import { IStackItem } from "./utils/types";
import styles from "./page.module.css";

function StackItemCard(item: IStackItem) {
    return (
        <div className={styles.stackCard}>
            <div className={styles.currentItemLogo}>{item.icon}</div>
            <div className={styles.stackCardText}>
                <h1>{item.name}</h1>
                {item.catchphrase && <h3>{item.catchphrase}</h3>}
                <p>{item.description}</p>
                <a href={item.docsLink} target="_blank" id="learn-more">
                    {item.name} documentation
                </a>
            </div>
        </div>
    );
}

export default function Home() {
    const [currentItem, setCurrentItem] = useState(
        StackItemCard(stackItems[0])
    );
    const [isFirstFocus, setIsFirstFocus] = useState(0);

    return (
        <main>
            <div className={styles.stackPage}>
                <h1>Tech stack</h1>
                <div className={styles.stackIcons}>
                    {stackItems.map((item, key) => (
                        <div
                            onMouseEnter={() => {
                                setCurrentItem(StackItemCard(item)),
                                    setIsFirstFocus(key),
                                    focus();
                            }}
                            onClick={() => {
                                setCurrentItem(StackItemCard(item)),
                                    setIsFirstFocus(key);
                            }}
                            onFocusCapture={() => {
                                setCurrentItem(StackItemCard(item)),
                                    setIsFirstFocus(key);
                            }}
                            key={key}
                            id={isFirstFocus === key ? "focused-item" : ""}
                            aria-label={item.name}
                            tabIndex={0}
                        >
                            <>{item.icon}</>
                        </div>
                    ))}
                </div>
                {currentItem}
            </div>
        </main>
    );
}
