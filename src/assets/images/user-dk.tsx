import React, { FC } from "react";

interface Props {
  active?: boolean;
}

const UserMenu: FC<Props> = ({ ...props }) => {
  const { active } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9987 9.99984C12.2999 9.99984 14.1654 8.13436 14.1654 5.83317C14.1654 3.53198 12.2999 1.6665 9.9987 1.6665C7.69751 1.6665 5.83203 3.53198 5.83203 5.83317C5.83203 8.13436 7.69751 9.99984 9.9987 9.99984Z"
        stroke={active ? "#fff" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1565 18.3333C17.1565 15.1083 13.9482 12.5 9.99817 12.5C6.04817 12.5 2.83984 15.1083 2.83984 18.3333"
        stroke={active ? "#fff" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserMenu;
