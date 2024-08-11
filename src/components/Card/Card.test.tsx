import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Card from './Card';
import { renderWithEnv } from '../../../tests/utils';
import { setTestAttrs } from '../../../tests/getTestAttrs';
import App from '../../pages/index';
import { ITEM } from '../../mocks/mocks';

describe('Card Component', () => {
  it('should display the card content', () => {
    renderWithEnv(<Card item={ITEM} />);
    expect(screen.getByTestId('card-name')).toBeInTheDocument();
    expect(screen.getByTestId('card-orbital_period')).toBeInTheDocument();
    expect(screen.getByTestId('card-population')).toBeInTheDocument();
  });
  it('should open a detailed card component when clicked', async () => {
    renderWithEnv(<App search="" />);

    const button = await screen.findByTestId(
      setTestAttrs({ id: 'card-button-open', value: ITEM.url }),
    );
    fireEvent.click(button);
    const detailed = await screen.findByTestId(
      setTestAttrs({ id: 'detailed-card', value: ITEM.name }),
    );
    expect(detailed).toBeInTheDocument();
  });
});
