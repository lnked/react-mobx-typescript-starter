import * as React from 'react';
import renderer from 'react-test-renderer';

import Collapse from './';

test('it works', () => {
  const rendered: any = renderer.create(<Collapse />).toJSON()
  expect(rendered).toBeTruthy()
});
