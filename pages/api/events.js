// import { google } from 'googleapis';




// // Provide the required configuration
// const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
// const calendarId = process.env.CALENDAR_ID;

// // Google calendar API settings
// const SCOPES = 'https://www.googleapis.com/auth/calendar';
// const calendar = google.calendar({version : "v3"});

// async function handler(req, res) {
//     if (req.method !== 'GET') {
//         res.status(405).send('Method Not Allowed');
//         return;
//     }

//     try {
//         const client = new google.auth.JWT(
//             CREDENTIALS.client_email,
//             null,
//             CREDENTIALS.private_key,
//             SCOPES
//         );


//         const events = await calendar.events.list({
//             calendarId: calendarId,
//             timeMin: (new Date()).toISOString(),
//             maxResults: 20,
//             singleEvents: true,
//             orderBy: 'startTime',
//         });

//         res.status(200).json(events.data.items);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'An error occurred when trying to fetch events' });
//     }
// }

// export default handler;


