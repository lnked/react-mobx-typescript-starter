import * as React from 'react';
import renderer from 'react-test-renderer';

import Navbar from './';

test('it works', () => {
  const rendered: any = renderer.create(<Navbar />).toJSON();
  expect(rendered).toBeTruthy();
});
