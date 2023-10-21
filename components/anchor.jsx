import NextLink from "next/link";
import { forwardRef } from "react";

export const Anchor = forwardRef(function (
  { href = "", children },
  forwardedRef,
) {
  const isNipRegex = /^\d{1,5}$/;

  const link = isNipRegex.test(href) ? `nip-${href}` : href;

  return (
    <NextLink
      ref={forwardedRef}
      href={link}
      passHref
      style={{
        textDecorationLine: "underline",
        textDecorationColor: "rgb(0, 138, 230)",
        color: "rgb(0, 130, 230)",
      }}
    >
      {children}
    </NextLink>
  );
});
