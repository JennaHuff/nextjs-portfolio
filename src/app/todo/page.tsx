"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { List } from "./components/List";
import { Title } from "./components/Title";
import { Todo } from "./components/Todo";
import { Trashcan } from "./components/Trashcan";
import { LISTS, TASKS } from "./utils/constants";
import { IItem, IList, ITask } from "./utils/types";
import { TextInputButton } from "./components/TextInputButton";
import styled from "styled-components";
import "./TodoPage.css";
import Link from "next/link";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

const StyledHeader = styled.div`
    input {
        background-color: white;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 1em;
    margin-inline: 3em;
`;

export default function TodoPage() {
    const [lists, setLists] = useState<IList[]>(LISTS);
    const [tasks, setTasks] = useState<ITask[]>(TASKS);

    function handleCreateList(newList: string) {
        if (newList.trim() === "") {
            alert("New list names should not be empty");
            return;
        }

        setLists((lists) => [
            ...lists,
            { id: uuidv4(), name: newList, type: "List" },
        ]);
    }

    function handleCreateTask(name: string, listId: string) {
        if (name.trim() !== "") {
            setTasks((tasks) => [
                ...tasks,
                {
                    listId,
                    name,
                    id: uuidv4(),
                    type: "Task",
                },
            ]);
        }
    }

    function handleMoveTask(droppedTask: ITask, destinationListId: string) {
        setTasks((tasks) => [
            ...tasks.filter((task) => task.id !== droppedTask.id),
            {
                ...droppedTask,
                listId: destinationListId,
            },
        ]);
    }

    function handleDeleteItem(item: IItem) {
        if (item.type === "List") {
            setLists((lists) => [
                ...lists.filter((list) => list.id !== item.id),
            ]);
        } else if (item.type === "Task") {
            setTasks((tasks) => [
                ...tasks.filter((task) => task.id !== item.id),
            ]);
        } else if (item.type === "Title") {
            item.setDomElementExists && item.setDomElementExists(false);
        }
    }

    return (
        <main>
            <DndProvider options={HTML5toTouch}>
                <div className="todo-page">
                    <StyledHeader>
                        <Title />
                        <TextInputButton
                            label="Create List"
                            onConfirm={(newlist) => handleCreateList(newlist)}
                        />
                    </StyledHeader>
                    <Trashcan handleDeleteItem={handleDeleteItem} />
                    <div className="lists-grid" style={{ margin: "50px" }}>
                        {lists.map((list) => (
                            <List
                                key={list.id}
                                list={list}
                                handleCreateTask={handleCreateTask}
                                handleMoveTask={handleMoveTask}
                            >
                                {tasks
                                    .filter((task) => task.listId === list.id)
                                    .map((task, index) => (
                                        <div key={uuidv4()}>
                                            <Todo key={task.id} task={task} />
                                            <hr key={index} />
                                        </div>
                                    ))}
                            </List>
                        ))}
                    </div>
                </div>
            </DndProvider>
        </main>
    );
}
