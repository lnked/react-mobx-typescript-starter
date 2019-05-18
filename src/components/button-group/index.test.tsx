import * as React from 'react';
import renderer from 'react-test-renderer';

import ButtonGroup from './';

test('it works', done => {
  console.log(done);
  const tree: any = renderer.create(<ButtonGroup />).toJSON();
  expect(tree.props.value).toBe(1);
});
