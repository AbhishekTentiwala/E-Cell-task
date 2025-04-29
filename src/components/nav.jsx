'use client'
// imp
//         </div>
//             {/* <div>
//                 <p>{days.current}</p>
//                 <p>{hours.current}</p>
//                 <p>{minutes.current}</p>
//                 <p>{seconds}</p>
//             </div> */}
//         </>
//     );
// }

// export default Navi;


import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function Navi() {
  return (
    <Navbar fluid >
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-cell NITA</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link}  href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href='/register'>Register</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
