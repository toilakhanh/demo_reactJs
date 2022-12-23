import React, { FC } from "react";

interface Props {
  active?: boolean;
}

const NotiMenu: FC<Props> = ({ ...props }) => {
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
        d="M7.58464 15.8332H7.16797C3.83464 15.8332 2.16797 14.9998 2.16797 10.8332V6.6665C2.16797 3.33317 3.83464 1.6665 7.16797 1.6665H13.8346C17.168 1.6665 18.8346 3.33317 18.8346 6.6665V10.8332C18.8346 14.1665 17.168 15.8332 13.8346 15.8332H13.418C13.1596 15.8332 12.9096 15.9582 12.7513 16.1665L11.5013 17.8332C10.9513 18.5665 10.0513 18.5665 9.5013 17.8332L8.2513 16.1665C8.11797 15.9832 7.80964 15.8332 7.58464 15.8332Z"
        stroke={active ? "#fff" : "#FF671E"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33203 6.6665H14.6654"
        stroke={active ? "#fff" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33203 10.8335H11.332"
        stroke={active ? "#fff" : "#FF671E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotiMenu;
