import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";

const A = styled.a`
  font-size: 14px;
  margin-right: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.tint};
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      text-decoration: underline;
    `}
`;
export default function Header() {
  const { pathname } = useRouter();
  return (
    <header>
      <Link href="/">
        <A isActive={pathname === "/" ? true : false}>Home</A>
      </Link>
      <Link href="/about">
        <A isActive={pathname === "/about" ? true : false}>About</A>
      </Link>
    </header>
  );
}
