export const reportingMenu = {
    title: 'Reporting',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.REPORING',
    page: '/service-connection',
    submenu: [
        {
            title: 'Reporting Template ',
            page: '/service-connection-menu/online-service-connection',

            submenu: [
                {
                    title: 'Registration',
                    page: '/online-service-registration',
                },
            ]
        },

        {
            title: 'Service Connection Reports',
            page: '/service-connection-menu/offline-service-connection',

            submenu: [
                {
                    title: 'Online NSC',
                    page: '/nsc-offline',
                },
                {
                    title: 'Offline NSC',
                    page: '/nsc-feedback-list',
                },
                {
                    title: 'LPU NSC',
                    page: '/nsc-feedback-list',
                },
            ]
        },

        {
            title: 'Customer Service',
            page: '/service-connection-menu/lpu-service-connection',

            submenu: [
                {
                    title: 'Pending',
                    page: '/lpu-service-registration',
                },
                {
                    title: 'Rectified',
                    page: '/lpu-account-number-generation',
                },
                {
                    title: 'Rejected',
                    page: '/lpu-assign-relay-dep-mem-by-rm',
                },
            ]
        },
        {
            title: 'Metering',
            page: '/wizard/wizard-1',

            submenu: [
                {
                    title: 'Open for Reading',
                    page: '/material/form-controls/autocomplete',
                },
                {
                    title: 'Finished Reading',
                    page: '/material/form-controls/checkbox'
                },
            ]
        },
        {
            title: 'Billing and Payment ',
            page: '/wizard/wizard-1',

            submenu: [
                {
                    title: 'Pending ',
                    page: '/material/form-controls/autocomplete',
                },
                {
                    title: 'Rectified ',
                    page: '/material/form-controls/autocomplete',
                },
                {
                    title: 'Collected',
                    page: '/material/form-controls/checkbox'
                },
                {
                    title: 'Cleared',
                    page: '/material/form-controls/autocomplete',
                }
            ]
        },

    ]
}