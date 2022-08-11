import { useState, useEffect, ChangeEvent } from 'react';
import {Link} from 'react-router-dom'
import EventType from '../interfaces/event';
import { TodoEvent } from '../components/TodoEvent/TodoEvent';
import './Pages.css'

export const Event = (): JSX.Element => {

  const [eventTitle, setEventTitle] = useState<string>('')
  const [allEvent, setAllEvent] = useState<EventType[]>([])

  useEffect(()=>{
    setAllEvent([{
      _id: 12312412,
      title: "Прыжки",
      date: new Date()
    },
    {
      _id: 12315212,
      title: "Еда",
      date: new Date()
    },])
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      if(!e.target) return
      const data = JSON.parse(e.target.result as string);
      setAllEvent(data.map((i: EventType) => ({
        ...i, 
        date: new Date(i.date)
      })))
    };
  };

  const getDate = (now: Date | string):Date | string => {
    const date = new Date(now);
    date.setDate(date.getDate() + 7);
    return date;
  };

  const addEvent = () => {
    if (eventTitle.length < 240 && eventTitle.length !== 0) {
      setAllEvent([
        ...allEvent, {
          _id: Date.now(),
          title: eventTitle,
          date: getDate(new Date()) 
        }
      ])
      setEventTitle('')
    } else alert('Некоректные данные')
  }

  return (
    <div className='main'>
      <header className="header">
        <Link to="/">Назад</Link>
      </header>
      <div className="todo">
        <div className="todo__header">
          <input type="file" name="" id="" onChange={handleChange}/>
          <input type="text" value={eventTitle} onChange={(e)=> setEventTitle(e.target.value)} className="input" placeholder='Введите событие'/>
          <button onClick={addEvent} className="button blue">Добавить</button>
          <button onClick={() => setAllEvent([])} className="button yellow">Очистить всё</button>
        </div>
        <TodoEvent events={allEvent}/>
      </div>
    </div>
  );
}