import { getTestAttrs } from '../../../tests/getTestAttrs';

const Loader = () => (
  <div {...getTestAttrs({ id: 'loader' })} className="loader" />
);
export default Loader;
