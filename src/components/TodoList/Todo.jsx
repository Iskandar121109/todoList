import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowDown, FaArrowUp, FaEdit, FaRegCheckCircle } from 'react-icons/fa'
import classes from './TodoList.module.css';
import { FaRegCircle } from 'react-icons/fa'

export const Todo = ({ todo, deleteTodo, getTodoList, setGetTodoList }) => {
    const [edited, setEdited] = useState(false);
    const [editTodoList, setEditedTodoList] = useState(
        {
            name: todo.name,
            date: todo.date,
            details: todo.details
        }
    );
    const [showDateTime, setShowDateTime] = useState(false);
    const [detailed, setDetailed] = useState(false);
 
    const editTodo = (id) => {
        const updatedTodoList = getTodoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, ...editTodoList };
            } else {
                return todo;
            }
        });
        setGetTodoList(updatedTodoList);
    }

    const dateReverse = (date) => {
        const year = date.slice(0, 4);
        const month = date.slice(4, 8);
        const day = date.slice(8, 11)
        const dateTodo = `${day}${month}${year}`;
        return dateTodo;
    }
    const [date] = useState(dateReverse(todo.date));
    return (
        !edited ?
            <div className={classes.todo}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <div className={classes.content} >
                            <div>
                                <span className={showDateTime ? classes.showDateTime : null}>{todo.name}  </span>
                                <span style={{ color: 'yellow' }}>до: {date}</span>
                            </div>
                            <div className={classes.icons}>
                                <IoIosCloseCircle onClick={() => deleteTodo(todo.id)} className={classes.IoIosCloseCircle} />
                                <FaEdit onClick={() => setEdited(true)} className={classes.FaEdit} />
                                {!showDateTime ? <FaRegCircle className={classes.FaRegCircle} onClick={() => setShowDateTime(true)} /> : <FaRegCheckCircle className={classes.FaRegCircle} onClick={() => setShowDateTime(false)} />}
                            </div>
                        </div>
                        {!detailed ? <FaArrowDown className={classes.arrow} onClick={() => setDetailed(!detailed)} /> : <FaArrowUp className={classes.arrow} onClick={() => setDetailed(!detailed)} />}
                        <div className={!detailed ? classes.hideDetil : classes.showDetil}>
                            {todo.details}
                        </div>
                    </li>
                </ul>
            </div>
            : <div>
                <input className={classes.input} type="text" placeholder='Название' onChange={(e) => setEditedTodoList({ ...editTodoList, name: e.target.value })} value={editTodoList.name} />
                <input className={classes.input} type="text" placeholder='Дата' onChange={(e) => setEditedTodoList({ ...editTodoList, date: e.target.value })} value={editTodoList.date} />
                <input className={classes.input} type="text" placeholder='Детали' onChange={(e) => setEditedTodoList({ ...editTodoList, details: e.target.value })} value={editTodoList.details} />
                <button onClick={() => { setEdited(false); editTodo(todo.id) }} className={classes.btnEdit}>Сохранить</button>
            </div>
    )
}
