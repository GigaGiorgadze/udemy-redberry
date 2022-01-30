import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import { getFilteredEvents } from '../../helpers/api-utils';

function FilteredEventsPage(props) {
  const date = new Date(+props.date.numYear, +props.date.numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </Fragment>
  );
}

export default FilteredEventsPage;

export  async function getServerSideProps(context) {
  const { params } = context

  const filterData = params.slug

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      notFound: true,
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {events: filteredEvents, date : {
      numYear,
      numMonth
    }}
  }
}