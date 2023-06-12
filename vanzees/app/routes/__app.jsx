import { Outlet } from '@remix-run/react'
import MainHeader from "./components/MainHeader"

export default function AppLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}