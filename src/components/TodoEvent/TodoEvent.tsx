import { EventItem } from '../EventItem/EventItem'
import EventType from '../../interfaces/event'

export const TodoEvent: React.FC<TodoEvent> = (props) => {
  return (
    <div className='main'>
      {props.events.map(e => (
        <EventItem key={e._id} {...e}/>
      ))}
    </div>
  )
}

interface TodoEvent {
  events: EventType[]
}