import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import NavLink from './NavLink'

export default function Navbar() {
  return (
      <>
      <nav className=" border-b border-dashed border-gray-700 bg-emerald-400 py-4 shadow">
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
                                    
                                    // active={route().current('home')}
                                >
                                    Home
                                </NavLink>
                                <NavLink href={'#'}>Jadwal Pakan</NavLink>
                                <NavLink href={'#'}>Data Stok</NavLink>
                                <NavLink href={'#'}>Data Suhu</NavLink>
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
