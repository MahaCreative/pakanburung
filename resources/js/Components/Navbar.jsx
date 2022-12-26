import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import NavLink from './NavLink'
import ResponsiveNavigation from './ResponsiveNavigation'

export default function Navbar() {
  return (
      <>
          <ResponsiveNavigation/>
      <nav className="hidden md:block border-b border-dashed border-gray-700 bg-emerald-400 py-4 shadow">
                <div className="mx-auto max-w-screen-2xl px-4">
                    <div className="flex items-center justify-between px-2 md:px-4 lg:px-8">
                        <Link
                            // href={}
                            className="mr-3 text-xl md:text-2xl lg:text-4xl font-semibold capitalize text-slate-700"
                        >
                            Pakan Burung
                        </Link>

                        <div className="flex items-center justify-between">
                            <div>
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Home
                                </NavLink>
                                <NavLink href={route('jadwal-pakan')}
                                    active={route().current('jadwal-pakan')}>Jadwal Pakan</NavLink>
                                <NavLink active={route().current('data-stok')} href={route('data-stok')}>Data Stok</NavLink>
                                <NavLink active={route().current('data-suhu')} href={route('data-suhu')}>Data Suhu</NavLink>
                                <NavLink method="POST"
                        as="button" active={route().current('logout')} href={route('logout')}>Logout</NavLink>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {/* <DropdownMenu label="Irsyad A. Panjaitan">
                                        <DropdownMenu.Link
                                            href={route('dashboard')}
                                        >
                                            Dashboard
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            My profile
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            Settings
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            New article
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            My articles
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            New article
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link
                                            href={route('logout')}
                                            method="POST"
                                            as="button"
                                        >
                                            Logout
                                        </DropdownMenu.Link>
                                    </DropdownMenu> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
      </>
  )
}
