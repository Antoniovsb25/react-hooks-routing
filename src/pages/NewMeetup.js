import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useHistory } from 'react-router-dom'

const NewMeetupPage = () => {

    const history = useHistory()

    function onAddMeetupHandler(meetupData) {
        //HTTP request
        //.json at the end is a firebase requirement
        // fetch default: GET request
        fetch(
            'https://react-getting-started-66c86-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        })
    }

    return (
       <section>
           <h1>Add New Meetup</h1>
           <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
       </section>
    )
}

export default NewMeetupPage
