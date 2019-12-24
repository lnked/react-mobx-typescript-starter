import * as React from 'react';

import { E } from 'layouts';
import { Image, JsonPretty } from 'components';

import { A, B, SnakeCase, AnotherBuild } from './components';

const About = ({ ui, app }: any) => (
  <div>
    <JsonPretty json={ui} />
    <JsonPretty json={app} />
    <h2>About</h2>
    <A />
    <B />
    <E />
    <SnakeCase />
    <AnotherBuild />
    <Image width={100} height={100} src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" />
    <Image src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" circle />
  </div>
);

export default About;
