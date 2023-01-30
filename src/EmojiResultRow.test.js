import React from 'react';
import { shallow } from 'enzyme';
import EmojiResultsRow from './EmojiResultRow';

describe('EmojiResultsRow component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <EmojiResultsRow
        title="Smiling Face"
        symbol="😊"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});