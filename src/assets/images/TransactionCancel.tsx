import React, { FC } from "react";

interface Props {
  active?: boolean;
}

const TransactionCancel: FC<Props> = ({ ...props }) => {
  const { active } = props;
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0001 40.3346C32.1253 40.3346 40.3334 32.1265 40.3334 22.0013C40.3334 11.8761 32.1253 3.66797 22.0001 3.66797C11.8749 3.66797 3.66675 11.8761 3.66675 22.0013C3.66675 32.1265 11.8749 40.3346 22.0001 40.3346Z"
        stroke="url(#paint0_linear_9853_39146)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 16.5L16.5 27.5"
        stroke="url(#paint1_linear_9853_39146)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16.5L27.5 27.5"
        stroke="url(#paint2_linear_9853_39146)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9853_39146"
          x1="3.66675"
          y1="3.66797"
          x2="45.2355"
          y2="10.4975"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={active ? "#FF671E" : "#CACACA"} />
          <stop offset="1" stopColor={active ? "#FF671E" : "#CACACA"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9853_39146"
          x1="16.5"
          y1="16.5"
          x2="28.9706"
          y2="18.5489"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={active ? "#FF671E" : "#CACACA"} />
          <stop offset="1" stopColor={active ? "#FF671E" : "#CACACA"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9853_39146"
          x1="16.5"
          y1="16.5"
          x2="28.9706"
          y2="18.5489"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={active ? "#FF671E" : "#CACACA"} />
          <stop offset="1" stopColor={active ? "#FF671E" : "#CACACA"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TransactionCancel;
