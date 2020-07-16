export const paymentMenuModule = {
    title: 'Payments',
    root: true,
    alignment: 'left',
    toggle: 'click',
    page: '/payments',
    translate: 'MENU.PAYMENTS',
    submenu: [
        {
            title: 'Collections',
            page: '/collections',
        },

        {
            title: 'Group Payments',
            page: '/group-payments',
            submenu: [
                {
                    title: 'Bill receipt cancellation',
                    page: '/br-cancellation'
                },
                {
                    title: 'Miscellaneous and energy charges',
                    page: '/me-charges'
                }
            ]
        },


        {
            title: 'Advanced payments',
            page: '/advance-payments',
            submenu: [
                {
                    title: 'Advanced payment Request',
                    page: '/payment-request',
                },
                {
                    title: 'Request Approval',
                    page: '/request-approval'
                },
                {
                    title: 'CA Approval',
                    page: '/ca-approval'
                },
                {
                    title: 'Billing Department Approval',
                    page: '/billing-dept-approval'
                },
            ]
        },


        {
            title: 'Installment Payments',
            page: '/installment-payments',
            submenu: [
                {
                    title: 'Installment Configuration',
                    page: '/configuration',
                },
                {
                    title: 'Installment Configuration Approval',
                    page: '/approval',
                },
                {
                    title: 'Installment Black List',
                    page: '/blacklist',
                },
                {
                    title: 'Installment Permanent Cancellation',
                    page: '/permanent-cancellation',
                },
                {
                    title: 'Re-connection Installment Configuration',
                    page: '/reconnection-configuration',
                },
                {
                    title: 'Duplicate Installment Acknowledgment',
                    page: '/duplicate-acknowledgment'
                },
            ]
        },

        {
            title: 'Search payments',
            page: '/search-payments',
        },

        {
            title: 'Reports',
            page: '/reports',
        },

        {
            title: 'Payment Posting',
            page: '/payment-posting',
        },

        {
            title: 'User Approval',
            page: '/user-approval',
        },

    ]
}