import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import DropdownMenu from '../Components/DropdownMenu';

export default function ResponsiveNavigation() {
    return (
        <nav className="border-b border-white bg-emerald-400 px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-bold text-white" href="/">
                    Pakan Burung
                </Link>
                <DropdownMenu
                    toggleAnimate={false}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    }
                >
                    <DropdownMenu.Link
                        href={route('dashboard')}
                        as="button"
                    >
                        Home
                    </DropdownMenu.Link>
                    <DropdownMenu.Link
                        href={route('jadwal-pakan')}
                        as="button"
                    >
                        Jadwal Pakan
                    </DropdownMenu.Link>
                    <DropdownMenu.Link
                        href={route('data-stok')}
                        as="button"
                    >
                        Data Stok
                    </DropdownMenu.Link>
                    <DropdownMenu.Link
                        href={route('data-suhu')}
                        as="button"
                    >
                        Data Suhu
                    </DropdownMenu.Link>
                    <DropdownMenu.Link
                        href={route('logout')}
                        method="POST"
                        as="button"
                    >
                        Logout
                    </DropdownMenu.Link>
                </DropdownMenu>
            </div>
        </nav>
    );
}