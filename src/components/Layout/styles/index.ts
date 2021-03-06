import styled, { css } from 'styled-components/macro';

import { environment } from '@settings/environment';

const outline = css`
  outline: 1px solid cyan;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;

  ${environment.development && outline}
`;
