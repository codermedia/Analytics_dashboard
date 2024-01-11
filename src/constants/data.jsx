// navigation constants starts from here
// logo
// const icon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className="text-white"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
//     />
//   </svg>
// );

const avatar = (
  <img
    src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
    alt="avatar"
    className="h-10 w-10 object-cover"
  />
);

const logo = "Git Analytics";
import fg from "../assets/Usa.jpg";
// navigation sections
const navLinks = [
  {
    path: "/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2912)">
          <path
            d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z"
            fill="#4318FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2912">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "dashboard",
  },

  {
    path: "/marketplace",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2909)">
          <path
            d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
            fill="#A3AED0"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2909">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "repositories",
  },
  {
    path: "/tables",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2906)">
          <path
            d="M7.46683 10.7333H7.70016C8.5985 10.7333 9.3335 11.4683 9.3335 12.3667V20.5333C9.3335 21.4317 8.5985 22.1667 7.70016 22.1667H7.46683C6.5685 22.1667 5.8335 21.4317 5.8335 20.5333V12.3667C5.8335 11.4683 6.5685 10.7333 7.46683 10.7333ZM14.0002 5.83334C14.8985 5.83334 15.6335 6.56834 15.6335 7.46668V20.5333C15.6335 21.4317 14.8985 22.1667 14.0002 22.1667C13.1018 22.1667 12.3668 21.4317 12.3668 20.5333V7.46668C12.3668 6.56834 13.1018 5.83334 14.0002 5.83334ZM20.5335 15.1667C21.4318 15.1667 22.1668 15.9017 22.1668 16.8V20.5333C22.1668 21.4317 21.4318 22.1667 20.5335 22.1667C19.6352 22.1667 18.9002 21.4317 18.9002 20.5333V16.8C18.9002 15.9017 19.6352 15.1667 20.5335 15.1667Z"
            fill="#A3AED0"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2906">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "followers",
  },
  // {
  //   path: "/kanban",
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_201_2903)">
  //         <path
  //           d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
  //           fill="#A3AED0"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_201_2903">
  //           <rect width="24" height="24" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  //   name: "kanban",
  // },
  {
    path: "/github",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2895)">
          <path
            d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z"
            fill="#A3AED0"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2895">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "github checker",
  },
  {
    path: "/profile",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2900)">
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
            fill="#A3AED0"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2900">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "profile",
  },
  {
    path: "/settings",
    icon: (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#A3AED0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    name: "settings",
  },
];

// navigation constants ends from here
// dashboard constants starts from here
const currencies = [
  {
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2503)">
          <path
            d="M9.28393 13.3136H9.55761C10.6113 13.3136 11.4734 14.1757 11.4734 15.2293V24.8082C11.4734 25.8618 10.6113 26.7239 9.55761 26.7239H9.28393C8.23026 26.7239 7.36816 25.8618 7.36816 24.8082V15.2293C7.36816 14.1757 8.23026 13.3136 9.28393 13.3136ZM16.947 7.56628C18.0007 7.56628 18.8627 8.42838 18.8627 9.48205V24.8082C18.8627 25.8618 18.0007 26.7239 16.947 26.7239C15.8933 26.7239 15.0312 25.8618 15.0312 24.8082V9.48205C15.0312 8.42838 15.8933 7.56628 16.947 7.56628ZM24.61 18.5135C25.6637 18.5135 26.5258 19.3756 26.5258 20.4293V24.8082C26.5258 25.8618 25.6637 26.7239 24.61 26.7239C23.5564 26.7239 22.6943 25.8618 22.6943 24.8082V20.4293C22.6943 19.3756 23.5564 18.5135 24.61 18.5135Z"
            fill="#4318FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2503">
            <rect
              width="32.8417"
              height="32.8417"
              fill="white"
              transform="translate(0.526367 0.724243)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Sarath",
    cash: "$350.4",
  },
  {
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2515)">
          <path
            d="M16.6734 15.6398C13.5672 14.8325 12.5682 13.9978 12.5682 12.6978C12.5682 11.2062 13.9503 10.1662 16.2629 10.1662C18.206 10.1662 19.1776 10.9052 19.5334 12.082C19.6976 12.6294 20.1492 13.0399 20.7239 13.0399H21.1344C22.0376 13.0399 22.6807 12.1504 22.366 11.302C21.7913 9.6873 20.4502 8.34626 18.3155 7.82627V6.88207C18.3155 5.7463 17.3987 4.82947 16.2629 4.82947C15.1271 4.82947 14.2103 5.7463 14.2103 6.88207V7.78522C11.5556 8.35995 9.4209 10.0841 9.4209 12.7252C9.4209 15.8862 12.0345 17.4598 15.8524 18.3767C19.2734 19.1977 19.9576 20.4019 19.9576 21.6745C19.9576 22.6187 19.2871 24.1239 16.2629 24.1239C14.005 24.1239 12.8419 23.3166 12.3903 22.1671C12.1851 21.6335 11.7198 21.2503 11.1588 21.2503H10.7756C9.85879 21.2503 9.21564 22.1808 9.55774 23.0292C10.3377 24.9313 12.1577 26.0534 14.2103 26.4913V27.4081C14.2103 28.5439 15.1271 29.4607 16.2629 29.4607C17.3987 29.4607 18.3155 28.5439 18.3155 27.4081V26.5187C20.9839 26.0123 23.1049 24.466 23.1049 21.6608C23.1049 17.7746 19.7797 16.4472 16.6734 15.6398Z"
            fill="#4318FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2515">
            <rect
              width="32.8417"
              height="32.8417"
              fill="white"
              transform="translate(0.526367 0.724243)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Total commits",
    cash: "$642.39",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          fill="#4318FF"
        />
      </svg>
    ),
    name: "Followers",
    cash: "$574.34",
  },
  {
    name: "Following",
    cash: "$1,000",
    flag: fg,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2530)">
          <path
            d="M25.6663 6.04337L12.3547 19.3667L7.40801 14.42L9.05301 12.775L12.3547 16.0767L24.0213 4.41004L25.6663 6.04337ZM13.9997 23.3334C8.85467 23.3334 4.66634 19.145 4.66634 14C4.66634 8.85504 8.85467 4.66671 13.9997 4.66671C15.8313 4.66671 17.5463 5.20337 18.993 6.12504L20.6847 4.43337C18.783 3.11504 16.4847 2.33337 13.9997 2.33337C7.55967 2.33337 2.33301 7.56004 2.33301 14C2.33301 20.44 7.55967 25.6667 13.9997 25.6667C16.018 25.6667 17.9197 25.1534 19.5763 24.2434L17.8263 22.4934C16.6597 23.03 15.3647 23.3334 13.9997 23.3334ZM22.1663 17.5H18.6663V19.8334H22.1663V23.3334H24.4997V19.8334H27.9997V17.5H24.4997V14H22.1663V17.5Z"
            fill="blue"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2530">
            <rect width="28" height="28" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Created at",
    count: 154,
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_201_2533)">
          <path
            d="M16.2503 1.08331H4.33366C3.14199 1.08331 2.16699 2.05831 2.16699 3.24998V17.3333C2.16699 17.9291 2.65449 18.4166 3.25033 18.4166C3.84616 18.4166 4.33366 17.9291 4.33366 17.3333V4.33331C4.33366 3.73748 4.82116 3.24998 5.41699 3.24998H16.2503C16.8462 3.24998 17.3337 2.76248 17.3337 2.16665C17.3337 1.57081 16.8462 1.08331 16.2503 1.08331ZM16.8895 6.05581L22.122 11.2883C22.5228 11.6891 22.7503 12.2416 22.7503 12.8158V22.75C22.7503 23.9417 21.7753 24.9166 20.5837 24.9166H8.65616C7.46449 24.9166 6.50033 23.9417 6.50033 22.75L6.51116 7.58331C6.51116 6.39165 7.47533 5.41665 8.66699 5.41665H15.3512C15.9253 5.41665 16.4778 5.64415 16.8895 6.05581ZM16.2503 13H21.1253L15.167 7.04165V11.9166C15.167 12.5125 15.6545 13 16.2503 13Z"
            fill="#4318FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2533">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Total repositories",
    count: 2935,
  },
];

const chart_data = [
  {
    name: "Oct",
    price: 642.39,
  },
  {
    name: "Nov",
    price: 942.39,
  },
  {
    name: "Dec",
    price: 642.39,
  },
  {
    name: "Jan",
    price: 900.39,
  },
];

import projectImg from "../assets/blue.jpg";

const projectList = [
  {
    img: projectImg,
    title: "Technology behind the Blockchain",
    description: "Project #1",
  },
  {
    img: projectImg,
    title: "Greatest way to a good Economy",
    description: "Project #2",
  },
  {
    img: projectImg,
    title: "More essential tips for Burnout",
    description: "Project #3",
  },
];

const getRepo = (repository) => {
  return repository;
};

const months = [];

export {
  avatar,
  logo,
  navLinks,
  currencies,
  chart_data,
  projectList,
  getRepo,
  months,
};
