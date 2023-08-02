import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import SmHeader from '@/components/SmHeader';
import homeStyles from '../styles/Home.module.css'
import showStyles from '../styles/Performances.module.css'

function EventList() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Compute start and end date
        let startDate = new Date();
        let endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 6); // Get events for the next 6 months

        // Convert dates to ISO string and remove time part
        let startDay = startDate.toISOString().split('T')[0];
        let endDay = endDate.toISOString().split('T')[0];

        fetch(`http://localhost:8080/events/${startDay}/${endDay}`) // Use startDay and endDay in the URL
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

    return (
        <>
             <div className={homeStyles.sm_header}>
                <SmHeader />  
            </div>
            <h1 className={showStyles.h1}>Upcoming Shows</h1>
                <div>
                {[...events].sort((a, b) => 
                    new Date(a.start?.dateTime || 0) - new Date(b.start?.dateTime || 0)
                ).map(event => { 
                        if(!event.start || !event.start.dateTime || !event.end || !event.end.dateTime) {
                            return null;
                        }
                    
                         // Convert start and end dates to Date objects
                        let startDate = new Date(event.start?.dateTime);
                        let endDate = new Date(event.end?.dateTime);

                        // Format dates
                        let startDateStr = startDate.toLocaleDateString('en-US');
                        let startTimeStr = startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                        let endDateStr = endDate.toLocaleDateString('en-US');
                        let endTimeStr = endDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                        return (
                            <>
                                {/* <h1>Upcoming Shows</h1> */}
                                    <div className={showStyles.container}  key={event.id}>
                                        <h2 className={showStyles.title}>{event.summary}</h2>
                                        <p>{startDateStr} </p>
                                        <p>{event.location}</p>
                                        <p>{startTimeStr} -  {endTimeStr} </p>
                                        <p>{event.description}</p>
                                    </div>
                                
                            </>
                        );
                    })}
                </div>
            <Footer />    
        </>
    );
}

export default EventList;
