import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/vue';
import TheHeader from '@/components/TheHeader.vue';

describe('TheHeader', () => {
  afterEach(cleanup); // somehow... cleanup does not work automatically

  it('should have title "Shopping-Lister" ', () => {
    const { getByText } = render(TheHeader);

    const element = getByText('Shopping-Lister');

    expect(element).toBeDefined();
  });

  it('should have subTitle "Just make a list." ', () => {
    const { getByText } = render(TheHeader);

    const element = getByText(/Just make a list\./);

    expect(element).toBeDefined();
  });
});
