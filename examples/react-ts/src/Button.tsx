interface IProps {
  change: () => void;
}

export default function MyComp(props: IProps): JSX.Element {
  const { change: handleChange } = props;
  return (
    <button onClick={handleChange} type="button">
      Click me
    </button>
  );
}
