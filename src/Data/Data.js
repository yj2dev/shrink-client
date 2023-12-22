// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons"; 

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

//   // Sidebar Data
// export const SidebarData = [
//     {
//         icon: UilEstate,
//         heading: "Dashboard",
//     },
//     {
//         icon: UilClipboardAlt,
//         heading: "Orders",
//     },
//     {
//         icon: UilUsersAlt,
//         heading: "Customers",
//     },
//     {
//         icon: UilPackage,
//         heading: 'Products'
//     },
//     {
//         icon: UilChart,
//         heading: 'Analytics'
//     },
// ];


// Analytics Cards Data
export const cardsData = [
  {
    title: "상품명",
    color: {
    //   backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    backGround: "rgb(188, 188, 255);",  
    boxShadow: "5px 7px 7px 0px #48DAFE",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "상품명",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "5px 7px 7px 0px #48DAFE",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "상품명",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "5px 7px 7px 0px #48DAFE",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "상품명",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "5px 7px 7px 0px #48DAFE",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
