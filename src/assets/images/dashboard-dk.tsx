import React, { FC } from "react";

interface Props {
  active?: boolean;
}

const DashboardMenu: FC<Props> = ({ ...props }) => {
  const { active } = props;
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00781 9.3501V13.0918C3.00781 16.8334 4.50781 18.3334 8.24948 18.3334H12.7411C16.4828 18.3334 17.9828 16.8334 17.9828 13.0918V9.3501"
        stroke={active ? "#FFF" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5017 9.99984C12.0267 9.99984 13.1517 8.75817 13.0017 7.23317L12.4517 1.6665H8.56003L8.0017 7.23317C7.8517 8.75817 8.9767 9.99984 10.5017 9.99984Z"
        stroke={active ? "#FFF" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7596 9.99984C17.443 9.99984 18.6763 8.63317 18.5096 6.95817L18.2763 4.6665C17.9763 2.49984 17.143 1.6665 14.9596 1.6665H12.418L13.0013 7.50817C13.143 8.88317 14.3846 9.99984 15.7596 9.99984Z"
        stroke={active ? "#FFF" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19868 9.99984C6.57368 9.99984 7.81535 8.88317 7.94868 7.50817L8.13202 5.6665L8.53202 1.6665H5.99035C3.80702 1.6665 2.97368 2.49984 2.67368 4.6665L2.44868 6.95817C2.28201 8.63317 3.51535 9.99984 5.19868 9.99984Z"
        stroke={active ? "#FFF" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5013 14.1665C9.10964 14.1665 8.41797 14.8582 8.41797 16.2498V18.3332H12.5846V16.2498C12.5846 14.8582 11.893 14.1665 10.5013 14.1665Z"
        stroke={active ? "#FFF" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardMenu;
