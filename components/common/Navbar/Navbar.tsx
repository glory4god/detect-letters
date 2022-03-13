import React from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
  const route = useRouter();

  return (
    <>
      <div className={s.paper}>
        <div className={s.navigator}>
          <Link href="/">
            <a className={s.mainlogo}>
              <b>DETECT-LETTERS</b>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
