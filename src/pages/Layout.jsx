import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <h1>Enter phone number and name of the contact</h1>

      <Outlet />
    </>
  );
};
