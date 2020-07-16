export const configurationMenuModule = {
    title: 'Configurations',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.CONFIGURATIONS',
    page: '/configuration',
    submenu: [
        {
            title: 'General',

            page: '',
            submenu: [
                {
                    title: 'Province',
                    page: '/province',
                }
            ]
        }
    ]
}