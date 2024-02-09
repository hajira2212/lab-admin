// dashbaord
import Default from "../admin/pages/dashboard";
import Account from "../pages/accounts";

import NotFoundPage from "../pages/error/notFoundPage";

import Patient from "../admin/pages/patient";

export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard`,
    Component: Default,
    role: ["user","admin"],
  },
 
  {
    path: `${process.env.PUBLIC_URL}/account`,
    Component: Account,
    role: ["admin", "user"],
  },
  {
    path: `${process.env.PUBLIC_URL}/404`,
    Component: NotFoundPage,
    role: ["user",  "admin"],
  },

  {
    path: `${process.env.PUBLIC_URL}/patient`,
    Component: Patient,
    role: ["user",  "admin"],
  },
];
