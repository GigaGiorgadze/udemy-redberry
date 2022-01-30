import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

function HomePage(props) {
  return (
    <div> 
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      featuredEvents
    }
  }
}

export default HomePage;
