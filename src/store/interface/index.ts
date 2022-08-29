/* MenuState */
export interface MenuState {
    isCollapse: boolean;
    menuList: Menu.MenuOptions[];
}

export interface TabsState{
    tabsMenuValue: string,
    tabsMenuList:Menu.MenuOptions[]
}

/* themeConfigProp */
export interface ThemeConfigProp {
    primary: string;
    isDark: boolean;
    isGrey: boolean;
    isWeak: boolean;
    breadcrumb: boolean;
    tabs: boolean;
    footer: boolean;
}
/* GlobalState */
export interface GlobalState {
    token: string;
    userInfo: any;
    assemblySize: string;
    language: string;
    themeConfig: ThemeConfigProp;
}