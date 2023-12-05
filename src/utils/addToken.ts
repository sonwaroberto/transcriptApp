export const tokenHeaderConfig = () => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2ZTQ2ZmFiOS0xMzZkLTQ2ODEtYTdjYy1jNGVmNzM4ODdkZmMiLCJvcmdhbmlzYXRpb25faWQiOiI5ODYyODAyZS1hZGQxLTRiYjQtYjFmMy00YTQ2OTE1OTE2MDMiLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiZXhwIjoxNzE5MDM1NzIwLCJpYXQiOjE3MDE3NTU3MjB9.Wz6ji5QRS-xBeXVw10XzW8C2I-VvZNENHV1D-t2oatE';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  return config;
};
