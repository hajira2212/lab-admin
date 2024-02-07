import { Home, Calendar,FileText, Image, UserPlus } from "react-feather";

export const MENUITEMS = [
  {
    menutitle: "",
    menucontent: "",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: Home,
        title: "Dashboard",
        type: "link",
      },
      // {
      //   path: `${process.env.PUBLIC_URL}/wafers-list`,
      //   icon: Image,
      //   title: "Wafers List",
      //   type: "link",
      // },
      {
        title: "Reports",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${process.env.PUBLIC_URL}/archived-report`,
          //   type: "link",
          //   title: "Archived",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/review-completed-report`,
          //   type: "link",
          //   title: "Review Completed",
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
      // {
      //   title: "Reports",
      //   icon: Calendar,
      //   type: "sub",
      //   active: false,
      //   children: [
      //     {
      //       path: `${process.env.PUBLIC_URL}/user/completed`,
      //       type: "link",
      //       title: "Inspected",
      //     },
      //     {
      //       path: `${process.env.PUBLIC_URL}/user/completed`,
      //       type: "link",
      //       title: "Disposed",
      //     },
      //   ],
      // },
    ],
  },
];

export const MANAGER_MENUITEMS = [
  {
    menutitle: "",
    menucontent: "",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: Home,
        title: "Dashboard",
        type: "link",
      },
      // {
      //   path: `${process.env.PUBLIC_URL}/wafers-list`,
      //   icon: Image,
      //   title: "Wafers List",
      //   type: "link",
      // },
      // {
      //   path: `${process.env.PUBLIC_URL}/manage/add-inspector`,
      //   icon: UserPlus,
      //   title: "Inspectors",
      //   type: "link",
      // },
      {
        title: "Reports",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${process.env.PUBLIC_URL}/archived-report`,
          //   type: "link",
          //   title: "Archived",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/review-completed-report`,
          //   type: "link",
          //   title: "Review Completed",
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
      //   {
      //     title: "Reports",
      //     icon: Calendar,
      //     type: "sub",
      //     active: false,
      //     children: [
      //       {
      //         path: `${process.env.PUBLIC_URL}/user/completed`,
      //         type: "link",
      //         title: "Inspected",
      //       },
      //       {
      //         path: `${process.env.PUBLIC_URL}/user/completed`,
      //         type: "link",
      //         title: "Disposed",
      //       },
      //     ],
      //   },
    ],
  },
];
