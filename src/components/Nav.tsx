import React, {ReactNode} from "react";
import {Link} from 'react-router-dom';

export const Nav = ({children}: { children?: ReactNode }) => <nav>{children}</nav>
export const NavItem = ({children, to}: { children?: ReactNode, to: string }) => (
    <Link to={to}>
        <span>{children}</span>
    </Link>
)