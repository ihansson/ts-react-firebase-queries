import React, {ReactNode} from "react";
import {NavLink} from 'react-router-dom';

export const Nav = ({children}: { children?: ReactNode }) => (
    <nav>
        <ul>{children}</ul>
    </nav>
)
export const NavItem = ({children, to, withStyle = 'is-default'}: { children?: ReactNode, to: string, withStyle?: string }) => (
    <li>
        <NavLink exact={true} className={withStyle} to={to}>
            <span>{children}</span>
        </NavLink>
    </li>
)