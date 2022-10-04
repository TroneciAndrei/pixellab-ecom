import { FooterContent } from "./FooterContent";
import { BsArrowUpCircleFill } from "react-icons/bs";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="container px-4 lg:py-9 lg:px-0 mx-auto">
        <FooterContent></FooterContent>
      </section>

      <div className="border border-t border-l-neutral-900 mt-8 lg:mt-2"></div>

      <section className="relative container px-4 lg:px-0 mx-auto flex items center justify-center lg:py-9 text-zinc-400">
        <button
          onClick={scrollToTop}
          className="absolute -top-5 animate-bounce"
          type="button"
          title="Back to Top"
        >
          <BsArrowUpCircleFill size={40} />
        </button>
        <span className="text-neutral-700 mt-8 lg:mt-2">
          &copy; 2022. Created by Troneci Andrei.
        </span>
      </section>
    </>
  );
};
