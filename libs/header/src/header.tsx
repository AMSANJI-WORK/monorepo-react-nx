import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div>
      <h1 className="py-2 text-3xl font-bold text-teal-500 capitalize">
        Welcome to Header!
      </h1>
    </div>
  );
}

export default Header;
