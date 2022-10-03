import Link from "next/link";

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400 border-l-0">
      <li>
        <Link href="/cart">
          <a
            title="Cart"
            className="w-24 h-24 flex justify-center items-center"
          >
            1
          </a>
        </Link>
      </li>
    </ul>
  );
};
