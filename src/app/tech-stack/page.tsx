"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { IStackItem } from "./utils/types";
import stackItems from "./utils/stackItems";

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

function Stack() {
    const [currentItem, setCurrentItem] = useState(
        StackItemCard(stackItems[0])
    );
    const [isFirstFocus, setIsFirstFocus] = useState(0);

    return (
        <div id="stack-page" className={styles.stackPage}>
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
                        className={
                            isFirstFocus === key ? styles.focusedItem : ""
                        }
                        aria-label={item.name}
                        tabIndex={0}
                    >
                        <>{item.icon}</>
                    </div>
                ))}
            </div>
            {currentItem}
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <Stack />
        </main>
    );
}
