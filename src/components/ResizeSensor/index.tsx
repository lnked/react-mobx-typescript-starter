import * as React from 'react';

import { OuterProps } from './types';
import { StyledDiv } from './styles';

const ResizeSensor: React.FC<OuterProps> = (props: OuterProps) => {
  // const itemReferer = React.createRef<HTMLInputElement>();
  // const [count, setCount] = useState(value);

  return (
    <StyledDiv {...props} />
  );
};

export default ResizeSensor;
