import { Button } from './Button';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('render component', () => {
    render(<Button label="test" />);
  });

  // it('render witch snapshot', () => {
  //   const { asFragment } = render(<Button label="test" />)

  //   expect(asFragment()).toMatchSnapshot();
  // })

  it('component render witch text', () => {
    render(<Button label="test" />);

    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  it('render multiply component', () => {
    render(
      <>
        <Button label="test1" />
        <Button label="test2" />
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button label="test" disabled />);

    expect(screen.getByText(/test/)).toBeDisabled();
  });

  // it('button have style color red', () => {
  //   render(<Button label="test" />);

  //   expect(screen.getByText(/test/)).toHaveStyle({ color: 'red' });
  // });

  it('button click witch userEvent', async () => {
    const mockHangler = jest.fn();
    render(<Button label="test" click={mockHangler} />);

    await userEvent.click(screen.getByText(/test/));

    expect(mockHangler).toHaveBeenCalledTimes(1);
  });

  it('button click async', async () => {
    const mockHangler = jest.fn();
    render(<Button label="test" click={() => setTimeout(mockHangler, 500)} />);

    await userEvent.click(screen.getByText(/test/));

    waitFor(() => expect(mockHangler).toHaveBeenCalledTimes(1));
  });

  it("test example")
});
