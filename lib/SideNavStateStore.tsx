'use client'

import { create } from "zustand";

type sideNavStoreState = {
    globalSideNavOpenState: boolean
}

type sideNavStoreActions = {
    setGlobalSideNavOpenState: (state: boolean) => void;
}

type SideNavStore = sideNavStoreState & sideNavStoreActions

const sideNavStateStore = create<SideNavStore>((set) => ({
    globalSideNavOpenState: false,
    setGlobalSideNavOpenState: (state: boolean) => set({globalSideNavOpenState: state})
}))

export default sideNavStateStore