import { useEffect, useState } from "react";

import {
  BsFillGrid1X2Fill,
  BsFillGridFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";

const buttonClasses = `
    w-24 h-24  border-l border-zinc-400 border-r-0 flex justify-center items-center
`;

export const GridControls = ({ setPerRow = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState("1/row");

  // de fiecare data cand itemsPerRow se schimba ruleaza acest callback
  useEffect(() => {
    const perRow = parseInt(itemsPerRow);

    setPerRow(perRow);
  }, [itemsPerRow]);

  return (
    <ul className="flex border border-l-0 border-zinc-400 ">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === "1/row" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setItemsPerRow("1/row");
          }}
        >
          <BsFillGrid1X2Fill size={25} />
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === "2/row" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setItemsPerRow("2/row");
          }}
        >
          <BsFillGridFill size={25} />
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === "4/row" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setItemsPerRow("4/row");
          }}
        >
          <BsFillGrid3X3GapFill size={25} />
        </button>
      </li>
    </ul>
  );
};
