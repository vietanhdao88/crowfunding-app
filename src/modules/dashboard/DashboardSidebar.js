import classNames from "components/classname/className";
import IconCampain from "components/icon/IconCampain";
import IconDarkmode from "components/icon/IconDarkmode";
import IconDashboard from "components/icon/IconDashboard";
import IconLogout from "components/icon/IconLogout";
import IconPayment from "components/icon/IconPayment";
import IconProfile from "components/icon/IconProfile";
import IconWithdraw from "components/icon/IconWithdraw";
import React from "react";
import { NavLink } from "react-router-dom";
const sidebarLinks = [
  {
    name: "Dashboard",
    icons: <IconDashboard></IconDashboard>,
    path: "/",
  },
  {
    name: "Campaign",
    icons: <IconCampain></IconCampain>,
    path: "/campaign",
  },
  {
    name: "Payment",
    icons: <IconPayment></IconPayment>,
    path: "/payment",
  },
  {
    name: "Withdraw",
    icons: <IconWithdraw></IconWithdraw>,
    path: "/withdraw",
  },
  {
    name: "Profile",
    icons: <IconProfile></IconProfile>,
    path: "/profile",
  },
  {
    name: "Logout",
    icons: <IconLogout></IconLogout>,
    path: "/logout",
    onClick: () => {},
  },
  {
    name: "Light/Dark",
    icons: <IconDarkmode></IconDarkmode>,
    path: "/light",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const navLinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg last:mt-auto last:shadow-sprimary mb-[40px] py-[10px] rounded";
  return (
    <div className="mt-4 shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] w-full md:w-[76px] px-[14px] py-10 rounded-3xl flex flex-col flex-shrink-0 bg-white">
      {sidebarLinks.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
                : `${navLinkClass} text-icon-color`
            }
          >
            <span className="block px-[10px]">{item.icons}</span>
            <span className="md:hidden"> {item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
