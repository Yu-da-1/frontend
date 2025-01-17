"use client";
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import {
    Box24Regular,
    BoxCheckmark24Regular,
    BoxSearch24Filled,
    PeopleCommunity24Filled,
} from "@fluentui/react-icons";

// interface NavigationSidebarProps {
//     resetMyBox: () => void;
//   }

export const NavigationSidebar = () => {
    const router = useRouter();
    // const refreshMybox = () => {
    //     router.refresh()
    // }

    const searchParams = useSearchParams()
    const cid = searchParams.get('cid');

    const pathname = usePathname();

    const navContents = [
        { name: 'My Box', href: '/my-box', icon: Box24Regular },
        { name: 'Shared Box', href: '/shared-box', icon: BoxCheckmark24Regular },
        { name: 'Get Box', href: '/get-box', icon: BoxSearch24Filled },
        { name: 'Friend List', href: '/friend-list', icon: PeopleCommunity24Filled },
    ];

    const maskStyle = {
        WebkitMaskImage: `url('/monasLogo.png')`,
        maskImage: `url('/monasLogo.png')`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'cover',
        maskSize: 'cover',
        backgroundColor: '#FF4185',
    };

    return (
        <div className="h-full">
            <aside className="h-full flex flex-col justify-center bg-pink03 rounded-r-xl text-black01 font-SegoeUI font-normal space-y-1.25rem" x-show="asideOpen">
                <Link href="/my-box" className="py-0.5rem ml-1rem rounded-l-full flex space-x-1.25rem hover:text-pink01">
                    <span className="text-2xl"><i className="bx bx-home"></i></span>
                    <img src='/box-24-regular.svg' />
                    <span>My Box</span>
                </Link>

                <Link href="/shared-box" className="py-0.5rem ml-1rem rounded-l-full flex space-x-1.25rem hover:text-pink01">
                    <span className="text-2xl"><i className="bx bx-cart"></i></span>
                    <img src='/box-checkmark-24-regular.svg' />
                    <span>Shared Box</span>
                </Link>

                <Link href="/get-box" className="py-0.5rem ml-1rem rounded-l-full flex space-x-1.25rem hover:text-pink01">
                    <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                    <img src='/box-search-24-filled.svg' />
                    <span>Get Box</span>
                </Link>

                <Link href="/friend-list" className="py-0.5rem ml-1rem rounded-l-full flex space-x-1.25rem hover:text-pink01">
                    <span className="text-2xl"><i className="bx bx-heart"></i></span>
                    <img src='/people-community-24-filled.svg' />
                    <span>Friend List</span>
                </Link>
            </aside>
        </div>
    )
}