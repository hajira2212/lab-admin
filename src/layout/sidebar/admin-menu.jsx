import {
  Home,
  Image,
  Inbox,
  FileText,
  Calendar,
  UserPlus,
  Archive,
} from "react-feather";

export const ADMIN_MENUITEMS = [
  {
    menutitle: "Administration",
    menucontent: "Manage InXpector",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: Home,
        title: "Dashboard",
        type: "link",
      },
      // {
      //   path: `${process.env.PUBLIC_URL}/admin/add-wafer`,
      //   icon: Image,
      //   title: "Wafer Task",
      //   type: "link",
      // },
      // {
      //   path: `${process.env.PUBLIC_URL}/admin/disposition`,
      //   icon: Inbox,
      //   title: "Disposition",
      //   type: "link",
      // },
      // {
      //   path: `${process.env.PUBLIC_URL}/admin/archived`,
      //   icon: Archive,
      //   title: "Archived",
      //   type: "link",
      // },
      {
        path: `${process.env.PUBLIC_URL}/admin/add-users`,
        icon: UserPlus,
        title: "Manage Users",
        type: "link",
      },
      {
        title: "Master",
        icon: Calendar,
        type: "sub",
        active: false,
        children: [
          
          {
            path: `${process.env.PUBLIC_URL}/patient`,
            type: "link",
            title: "patient Master",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/layer-master`,
          //   type: "link",
          //   title: "Layer Master",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/step-master`,
          //   type: "link",
          //   title: "Step Master",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/layer-master`,
          //   type: "link",
          //   title: "Layer Master",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/defects-master`,
          //   type: "link",
          //   title: "Defects Master",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/status-master`,
          //   type: "link",
          //   title: "Status Master",
          // },
        ],
      },
      {
        title: "Reports",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/admin/User-completed-report`,
            type: "link",
            title: "Users",
          },

          {
            path: `${process.env.PUBLIC_URL}/admin/Temple-completed-report`,
            type: "link",
            title: "Temple",
          },

          // {
          //   path: `${process.env.PUBLIC_URL}/admin/archived-report`,
          //   type: "link",
          //   title: "Archived",
          // },

          // {
          //   path: `${process.env.PUBLIC_URL}/admin/Inxpection-report`,
          //   type: "link",
          //   title: "Inxpection By User Report",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/Inxpection-completed-report`,
          //   type: "link",
          //   title: "Inxpection Report",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/review-count-by-hours-report`,
          //   type: "link",
          //   title: "Review Count By Hours Report",
          // },
        ],
      },
    ],
  },
];

export const MASTER_MENUITEMS = [
  {
    menutitle: "Administration",
    menucontent: "Manage InXpector",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: Home,
        title: "Dashboard",
        type: "link",
      },
      // {
      //   path: `${process.env.PUBLIC_URL}/admin/add-wafer`,
      //   icon: Image,
      //   title: "Wafer Task",
      //   type: "link",
      // },
      // {
      //   path: `${process.env.PUBLIC_URL}/admin/disposition`,
      //   icon: Inbox,
      //   title: "Disposition",
      //   type: "link",
      // },
      // {
      //   path: `${process.env.PUBLIC_URL}/admin/archived`,
      //   icon: Archive,
      //   title: "Archived",
      //   type: "link",
      // },
      {
        title: "Reports",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/admin/archived-report`,
            type: "link",
            title: "Archived Report",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/Inxpection-report`,
          //   type: "link",
          //   title: "Inxpection By User Report",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/Inxpection-completed-report`,
          //   type: "link",
          //   title: "Inxpection Report",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/admin/review-count-by-hours-report`,
          //   type: "link",
          //   title: "Review Count By Hours Report",
          // },
        ],
      },
    ],
  },
];
