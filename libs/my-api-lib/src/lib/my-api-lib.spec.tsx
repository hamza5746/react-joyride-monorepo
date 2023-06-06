import { render } from '@testing-library/react';

import MyApiLib from './my-api-lib';

describe('MyApiLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyApiLib />);
    expect(baseElement).toBeTruthy();
  });
});
