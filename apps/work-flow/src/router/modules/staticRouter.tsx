import Login from "@/views/login/index";
import Home from "@/views/home/index";
import Flow from "@/views/flow/index";
import { HOME_URL, LOGIN_URL, FLOW_URL } from "@/constants/pageUrl";

import type { RouteObjectType } from "@/router/interface";
import LayoutContainer from "@/layout";

export const staticRouter: RouteObjectType[] = [
  {
    element: <LayoutContainer />,
    children: [
      {
        path: HOME_URL,
        element: <Home />
      }
    ]
  },
  {
    element: <Flow />,
    path: FLOW_URL
  },
  {
    path: LOGIN_URL,
    element: <Login />
  }
];
