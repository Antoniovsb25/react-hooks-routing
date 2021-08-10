import MeetupList from '../components/meetups/MeetupList'
import { useState, useEffect } from 'react'

const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-getting-started-66c86-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json() //also returns a promise
    }).then(data => {

      const meetups = []

      //This is required for entering the object key value created at firebase
      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      //Now here we can send the data transformed for the user
      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [])

  if(isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage

