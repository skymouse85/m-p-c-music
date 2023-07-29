import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import SmHeader from '@/components/SmHeader';
import homeStyles from '../styles/Home.module.css'

function EventList() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);


    // function dateTimeParse (

    // )

    useEffect(() => {
        fetch('http://localhost:8080') // Make sure the URL is correct
            .then(response => response.json())
            .then(data => {
                if(data.error) {
                    setError(data.error);
                } else {
                    setEvents(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
//will need to map backwards to show shows in order
    return (
        <>
             <div className={homeStyles.sm_header}>
                <SmHeader />  
            </div>
                <div>
                
                    {events.map(event => (
                        <div key={event.id}>
                            <h2>{event.summary}</h2>
                            <p>{event.description}</p>
                            <p>{event.location}</p>
                            <p>{event.start?.dateTime} - {event.end?.dateTime}</p>
                        </div>
                    ))}
                </div>
            <Footer />    
        </>
    );
}

export default EventList;
