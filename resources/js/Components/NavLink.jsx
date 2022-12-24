import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

export default function NavLink({ active = false, children, ...props }) {
    return (
        <Link
            className={clsx(
                active && 'font-semibold text-white bg-slate-800',
                'inline-block text-sm md:text-base rounded px-2 md:px-4 mx-1 py-2 font-medium text-white bg-slate-700'
            )}
            {...props}
        >
            {children}
        </Link>
    );
}