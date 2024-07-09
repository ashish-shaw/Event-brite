import './App.css';
import { Header } from './components/Header';
import { EventConcert } from './components/EventConcert'
import eventbrite from './assests/images/eventbrite.png'
function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <img src={eventbrite} className='w-full h-full'/>
      <div className='bg-[#d1410c] text-white p-1.5 w-40 h-10 rounded relative bottom-[72px] left-16'>
        <button className='font-semibold text-sm'>Find your next date</button>
      </div>
      </div>
      <EventConcert/>
      <div className='border-b mt-4'></div>
      
    </div>
  );
}

export default App;
