import React from "react";
import Link from "next/link";

export const FooterContent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 items-center font-medium">
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-xl">Los Angeles</h2>

        <p className="text-neutral-400">
          145 Oliveshka Street, <br></br>Los Angeles, LA 90003
        </p>
        <span className="text-neutral-400">+44 987 065 901</span>
        <span className="text-neutral-400">info@Example.com</span>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-xl">San Francisco</h2>

        <p className="text-neutral-400">
          210 Pier Street, <br></br>San Francisco, CA 94111
        </p>
        <span className="text-neutral-400">+44 987 065 902</span>
        <span className="text-neutral-400">info@Example.com</span>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-xl">New York</h2>

        <p className="text-neutral-400">
          711 Snow Street, <br></br>New York, NY 10014
        </p>
        <span className="text-neutral-400">+44 987 065 903</span>
        <span className="text-neutral-400">info@Example.com</span>
      </div>

      <div>
        <h2 className="uppercase text-xl mb-2">Follow Us</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <Link href="facebook.com">
              <a title="Facebook" className="text-neutral-400">
                Facebook
              </a>
            </Link>

            <Link href="twitter.com">
              <a title="Twitter" className="text-neutral-400">
                Twitter
              </a>
            </Link>

            <Link href="instagram.com">
              <a title="Instagram" className="text-neutral-400">
                Instagram
              </a>
            </Link>

            <Link href="linkedin.com">
              <a title="Linkedin" className="text-neutral-400">
                Linkedin
              </a>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="dribble.com">
              <a title="Dribble" className="text-neutral-400">
                Dribble
              </a>
            </Link>

            <Link href="behance.com">
              <a title="Behance" className="text-neutral-400">
                Behance
              </a>
            </Link>

            <Link href="pinterest.com">
              <a title="Pinterest" className="text-neutral-400">
                Pinterest
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
