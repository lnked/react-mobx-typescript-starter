import * as React from 'react';
import renderer from 'react-test-renderer';

import Skeleton from './';

test('it works', () => {
  const rendered: any = renderer.create(<Skeleton />).toJSON();
  expect(rendered).toBeTruthy();
});
