import useEnvVar from '../hooks/useEnvVar';

const ShowEnvVars = () => {
  const { environmentVars } = useEnvVar();

  return (
    <>
      <p>Environment variables:</p>
      <ul>
        {Object.entries(environmentVars).map(([key, val]) => (
          <li key={key}>
            <strong>{key}:</strong>
            {val}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowEnvVars;
