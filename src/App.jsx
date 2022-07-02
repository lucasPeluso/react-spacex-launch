import { useState, useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './components/LauchItem';

import * as API from './services/launches';
import logo from './assets/SpaceX-logo.png'

export const App = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={logo} width={300} m={4} />
      <Heading as="h1" size="xl" align="center" m={4}>Space X Lauches</Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  )
}
