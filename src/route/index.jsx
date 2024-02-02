// dashbaord
import Default from "../admin/pages/dashboard";





export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard`,
    Component: Default,
    role: ["user", "manager"],
  },
   
];
