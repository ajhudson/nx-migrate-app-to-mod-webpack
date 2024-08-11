type EnvironmentVariables = { [key: string]: string | undefined };

const useEnvVar = () => {
  //.filter((key) => key.startsWith('REACT_APP'))

  console.log('looking for env vars:', Object.keys(process.env));

  const environmentVars: EnvironmentVariables = Object.keys(process.env).reduce(
    (obj: EnvironmentVariables, key: string) => {
      console.log(obj);

      obj[key] = process.env[key];

      return obj;
    },
    {}
  );

  return { environmentVars };
};

export default useEnvVar;
