meetings = [
    {
        date: new Date('2024/3/30'),
        time: '6:00pm',
        host: 'Kent',
        hostEmail: 'kent.adamson@comcast.net',
        additionalInfo: []
    },
    {
        date: new Date('2023/11/11'),
        time: '6:00pm',
        host: 'Kent',
        hostEmail: 'kentsEmail@mail.com',
        additionalInfo: []
    },
    {
        date: new Date('2024/08/10'),
        time: '6:00pm',
        host: 'Kent',
        hostEmail: 'kent@mail.com',
        additionalInfo: []
    }, 
]

function returnUpcomingMeeting() {

    var currentDate = new Date(new Date().toDateString()); 
    
    const currentDateFormatted = currentDate.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
    
    return meetings.find(meeting => {
        var date2 = new Date(new Date(meeting.date).toDateString()); 
        const meetingDateFormatted = meeting.date.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
        return date2 >= currentDate;
      });
}
