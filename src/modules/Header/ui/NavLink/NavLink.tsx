import { LinkType } from '@/types/link.type';
import styles from './navlink.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';

interface NavLinkProps {
  link: LinkType
  isCurrent: boolean
}

const NavLink = ({ isCurrent, link }: NavLinkProps) => {
  const navLinkStyle = cn(
    styles.navLink,
    {[styles.active]: isCurrent}
  )

  return (
    <>
      {isCurrent ? (
        <Link to={link.path} className={navLinkStyle}>
          {link.name}
        </Link>
      ) : (
        <span className={navLinkStyle}>
          {link.name}
        </span>
      )}
    </>
  );
}

export default NavLink
