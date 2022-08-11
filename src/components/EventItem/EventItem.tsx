import EventType from "../../interfaces/event";
import './EventItem.css'

export const EventItem: React.FC<EventType> = (props) => {

  const {title, date} = props

  return (
    <>
      {Math.round((date as Date).getTime()) < Math.round((new Date()).getTime()) ? (<div className="expired-title">{title + ' ' + date.toLocaleString('en-US', { hour12: false })}</div>): 
      (<div className="event-title">{title + ' ' + date.toLocaleString('en-US', { hour12: false })}</div>)} 
    </>
  )
}