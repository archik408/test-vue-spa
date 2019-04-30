import { mount } from '@vue/test-utils';
import MainLayout from '../Main';
import VLink from '../../components/VLink';

describe('MainLayout', () => {
  const wrapper = mount(MainLayout);

  it('renders correct component structure', () => {
    expect(wrapper.findAll(VLink)).toHaveLength(4);
    expect(wrapper.findAll('li')).toHaveLength(4);
    expect(wrapper.contains('img')).toBe(true);
    expect(wrapper.contains('nav')).toBe(true);
    expect(wrapper.contains('ul')).toBe(true);
  });
});
