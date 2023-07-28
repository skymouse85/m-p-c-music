import { google } from 'googleapis';

const handler = async (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
        return;
    }

    const client = new google.auth.JWT(
        process.env.GOOGLE_CLIENT_EMAIL,
        null,
        process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/calendar.readonly'],
    );

    const calendar = google.calendar({ version: 'v3', auth: client});

    const calendarId = "8aeeql20in6th1kdmgvhojqdqo@group.calendar.google.com";
    const events = await calendar.events.list({
        calendarId,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    });

    res.status(200).json(events.data.items);
};

export default handler;

