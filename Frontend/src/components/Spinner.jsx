/* eslint-disable react/prop-types */
import BounceLoader from 'react-spinners/BounceLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <BounceLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
