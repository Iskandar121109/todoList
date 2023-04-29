import React, { useEffect, useState } from 'react'
import { Todo } from './Todo';
import classes from './TodoList.module.css';


export const Todolist = () => {
  const [todolist, setTodoList] = useState([
    {
      "id": 1681220862784,
      "name": "Изучить JavaScript",
      "complate": false,
      "date": "2023-04-14",
      "details": "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
    },
    {
      "id": 1681220917153,
      "name": "Изучить TypeScript",
      "complate": false,
      "date": "2023-04-19",
      "details": "TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. Разработчиком языка TypeScript является Андерс Хейлсберг, создавший ранее Turbo Pascal, Delphi и C#."
    },
    {
      "id": 1681220962122,
      "name": "Изучить React",
      "complate": false,
      "date": "2023-04-24",
      "details": "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений."
    },
    {
      "id": 1681221007172,
      "name": "Изучить Node.js ",
      "complate": false,
      "date": "2023-04-29",
      "details": "Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения."
    },
    {
      "id": 1681221047658,
      "name": "Изучить MySQL",
      "complate": false,
      "date": "2023-05-05",
      "details": "MySQL — свободная реляционная система управления базами данных. Разработку и поддержку MySQL осуществляет корпорация Oracle, получившая права на торговую марку вместе с поглощённой Sun Microsystems, которая ранее приобрела шведскую компанию MySQL AB."
    }
  ]);

  useEffect(() => {
    localStorage.setItem('todolistDefault', JSON.stringify(todolist));
  }, [todolist]);

  const getTodo = localStorage.getItem('todolist');

  const [getTodoList, setGetTodoList] = useState(JSON.parse(getTodo));

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(getTodoList));
  }, [getTodoList]);

  const [line, setLine] = useState(false);
  const [lineText, setLineText] = useState('Добавленно');
  const [todos, setTodos] = useState({
    id: 0,
    name: '',
    complate: false,
    date: '',
    details: ''
  })
  const resetInput = {
    id: 0,
    name: '',
    complate: false,
    date: '',
    details: ''
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (todos.name !== '') {
      setGetTodoList([...getTodoList, { ...todos, id: Date.now(), name: todos.name }]);
      setLineText('Добавленно')
    } else {
      setLineText('Поля не должен быть пустым')
    }
    setTodos(resetInput);
    setLine(true);
  }
  const deleteTodo = (id) => {
    setGetTodoList(getTodoList.filter(todo => todo.id !== id));
  }

  return (
    <div className={classes.todolist}>
      <h1 style={{ fontSize: '3rem', margin: '5px', transform: 'translateY(-25px)' }}>Список задач</h1>
      <form className={classes.inputs}>
        <div onClick={() => setLine(false)} className={!line ? classes.animate : classes.animateActive}>{lineText}</div>
        <input type="text" placeholder='Задача' onChange={(e) => setTodos({ ...todos, name: e.target.value })} value={todos.name} />
        <input type="date" onChange={(e) => setTodos({ ...todos, date: e.target.value })} value={todos.date} />
        <input type="text" placeholder='detailed' onChange={(e) => setTodos({ ...todos, details: e.target.value })} value={todos.details} />
        <button onClick={addTodo} className={classes.btn}>Добавить</button>
      </form>
      {getTodoList.length > 0 ? getTodoList.map(todo => <Todo getTodoList={getTodoList} setGetTodoList={setGetTodoList} deleteTodo={deleteTodo} todo={todo} key={todo.id} />) : <h1>Нет задач</h1>}
    </div>
  )
}
