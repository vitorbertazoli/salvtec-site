import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {

    const navigation = [
        // { name: 'Inicio', href: '/' },
        { name: 'Serviços', href: '/#servicos' },
        { name: 'Sobre', href: '/#sobre' },
        // { name: 'Parceiros', href: '#parceiros' },
        { name: 'Reviews', href: '/#reviews' },
        { name: 'Contato', href: '/#contato' },

    ]

    return (

        <Disclosure
            as="nav"
            className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <a href="/" aria-label="Home">
                                <img style={{ height: "40px" }}
                                    alt="SalvTec - Soluções em Climatização"
                                    src="/images/logo-salvtec-optimized.png"
                                    className="w-auto" />
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='hover:bg-white/5 hover:text-gray-300'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div><DisclosurePanel className="sm:hidden absolute z-30 left-0 right-0 top-full bg-white text-gray-900 shadow-md z-20 rounded-b-md">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            className="w-full text-left px-3 py-2 rounded-md 'hover:bg-white/5 hover:text-gray-300'"
                        >
                            <a href={item.href} className="block w-full h-full">
                                {item.name}
                            </a>
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure >
    )
}