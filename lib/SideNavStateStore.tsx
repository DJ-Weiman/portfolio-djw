'use client'

import { create } from "zustand";

type sideNavStoreState = {
    openState: boolean
}

type sideNavStoreActions = {
    setOpenState: (state: boolean) => void;
}

type SideNavStore = sideNavStoreState & sideNavStoreActions

const sideNavStateStore = create<SideNavStore>((set) => ({
    openState: false,
    setOpenState: (state: boolean) => set({openState: state})
}))

export default sideNavStateStore