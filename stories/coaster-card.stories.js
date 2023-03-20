import { html } from 'lit';
import '../src/coaster-card.js';

export default {
  title: 'CoasterCard',
  component: 'coaster-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <coaster-card
      style="--coaster-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </coaster-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
