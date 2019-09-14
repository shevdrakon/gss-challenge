import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'
import {shallow as shallowOriginal} from 'enzyme'

import WidgetComplete from '../../../src/client/chat/widgets/widget-complete';
import Message from '../../../src/client/components/message/message';

/**
 * Have to provide a workaround since default shallow() from enzyme pkg do not support hooks shallow rendering
 */
const shallow = (Component) => {
  const renderer = new ShallowRenderer();
  renderer.render(Component);

  const output = renderer.getRenderOutput();
  return shallowOriginal(<div>{output}</div>);
}

describe('Widget complete', () => {
  describe('Rendering labels', () => {
    it('should render Message with right type', () => {
      const widget = shallow(<WidgetComplete data={['Yes', 'No', 'Maybe']} />);
      const message = widget.find(Message);

      expect(message.props().type).toEqual('right');
    });

    it('should render proper list of answers', () => {
      const widget = shallow(<WidgetComplete data={['Yes', 'No', 'Maybe']} />);
      const answers = widget.find('[data-label]');

      expect(answers).toHaveLength(3);
      expect(answers.get(0).props.label).toEqual('Yes');
      expect(answers.get(1).props.label).toEqual('No');
      expect(answers.get(2).props.label).toEqual('Maybe');
    });
  });

  describe('Dispatching event', () => {
    it('should rise onAnswer props function on answer click', () => {
      const fn = jest.fn();
      const widget = shallow(<WidgetComplete data={['Yes', 'No', 'Maybe']} onAnswer={fn} />);
      const answers = widget.find('[data-label]');

      answers.at(1).simulate('click', 'No');
      expect(fn).toBeCalledWith('No');
    });
  });
});
