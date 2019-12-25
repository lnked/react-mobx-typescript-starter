import * as React from 'react';

import { E } from 'layouts';
import { Image, JsonPretty } from 'components';

const About = ({ ui, app }: any) => (
  <div>
    <h2>About</h2>
    <E />
    <JsonPretty json={ui} />
    <JsonPretty json={app} />
    <Image src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" circle />
    <Image width={100} height={100} src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" />
  </div>
);

export default About;
