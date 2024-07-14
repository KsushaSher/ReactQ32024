export const DATA_TEST_ELEMENT = 'data-testid';

export const getTestAttrs = ({ id }: { id: string }) => ({
  [DATA_TEST_ELEMENT]: id,
});
