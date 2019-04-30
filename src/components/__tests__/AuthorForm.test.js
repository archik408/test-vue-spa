import { mount } from '@vue/test-utils';
import AuthorForm from '../AuthorForm';

describe('AuthorForm', () => {
  const onSave = jest.fn();
  const onClose = jest.fn();
  const wrapper = mount(AuthorForm, {
    propsData: {
      show: true,
      author: { firstName: '', books: ['test 1'], lastName: '', id: '1' },
      books: [{ id: '1', name: 'test 1' }, { id: '2', name: 'test 2' }, { id: '3', name: 'test 3' }],
      onSave,
      onClose
    }
  });

  it('renders correct component structure', () => {
    expect(wrapper.findAll('select')).toHaveLength(1);
    expect(wrapper.findAll('label')).toHaveLength(3);
    expect(wrapper.findAll('#firstName')).toHaveLength(1);
    expect(wrapper.findAll('#lastName')).toHaveLength(1);
    expect(wrapper.findAll('option')).toHaveLength(3);
    expect(wrapper.contains('.de-emphasized')).toBe(true);
    expect(wrapper.contains('dialog')).toBe(true);
  });

  it('handles on save event with correct data', () => {
    expect(wrapper.findAll('input')).toHaveLength(2);
    wrapper.find('#firstName').setValue('test value');
    wrapper.find('#lastName').setValue('test value');
    wrapper.find('select').setValue('2');

    const form = wrapper.findAll('form').at(0);
    form.trigger('submit');
    expect(onSave).toHaveBeenCalled();
    expect(wrapper.vm.author).toEqual({ firstName: 'test value', books: ['2'], lastName: 'test value', id: '1' });
  });

  it('handles on close event with correct data', () => {
    const btn = wrapper.findAll('button').at(1);
    btn.trigger('click');
    expect(onClose).toHaveBeenCalled();
  });
});
