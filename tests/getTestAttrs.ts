export const DATA_TEST_ELEMENT = 'data-testid';

interface IArgs {
  id: string;
  value?: string;
}

export const getTestAttrs = (args: IArgs) => ({
  [DATA_TEST_ELEMENT]: setTestAttrs(args),
});

export const setTestAttrs = ({ id, value }: IArgs) =>
  [id, value].filter(i => i).join('|');
