import PropTypes from 'prop-types';

export default function MyComp(props) {
  const { change: handleChange } = props;
  return (
    <button onClick={handleChange} type="button">
      Click me
    </button>
  );
}

MyComp.propTypes = {
  change: PropTypes.func,
};
