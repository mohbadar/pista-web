export const billingMenuModule = {
    title: 'Billing',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.BILLING',
    page: '/billing',
    submenu: [
        {
            title: 'Quick Links',
            page: '/quick-links',
            submenu: [
                {
                    title: 'Customer Search',
                    page: '/customer-search',
                },
                {
                    title: 'Duplicate Bill Print',
                    page: '/duplicate-bill-print'
                },
                {
                    title: 'Duplicate Final Bill Print',
                    page: '/duplicate-final-bill-print'
                },
                {
                    title: '!Customer MobileNo Update!',
                    page: '/customer-mobileno-update'
                },
            ]
        }, {
            title: 'Billing',
            page: '/billing',
            submenu: [
                {
                    title: 'Bill Process',
                    page: '/bill-process',
                },
                {
                    title: 'Bill Preview',
                    page: '/bill-preview',
                    submenu: [
                        {
                            title: 'Group Bill Print',
                            page: '/group-bill-preview',
                        },
                        {
                            title: 'Single Bill Print',
                            page: '/single-bill-preview',
                        },
                        {
                            title: 'Duplicate Bill Print',
                            page: '/duplicate-bill-preview',
                        },
                        {
                            title: 'Duplicate Fill Bill Print',
                            page: '/final-duplicate-bill-preview',
                        }
                    ]
                },
                {
                    title: 'Bill',
                    page: '/bill',
                    submenu: [
                        {
                            title: 'Adjustments',
                            page: '/adjustments',
                        },
                        {
                            title: 'Final Bill Requests',
                            page: '/final-bill-requests',
                        }
                    ]
                }, {
                    title: 'SMS Billing',
                    page: '/sms-billing',
                    submenu: [
                        {
                            title: '!Single MobileNo Binding!',
                            page: '/single-mobileno-binding',
                        },
                        {
                            title: '!Bulk MobileNo Upload!',
                            page: '/bulk-mobileno-upload',
                        },
                        {
                            title: '!Send SMS!',
                            page: '/send-sms',
                        },
                        {
                            title: '!Send Delivery Report!',
                            page: '/send-delivery-report',
                        }
                    ]
                }
            ]
        },
        {
            title: 'Other Activites',
            page: '/other-activities',
            submenu: [
                {
                    title: 'Daily Bill Print',
                    page: '/daily-bill-print',
                },
                {
                    title: 'CAAD',
                    page: '/caad',
                },
                {
                    title: 'CRMD',
                    page: '/crmd',
                },
                {
                    title: 'Approvals for Customer Changes',
                    page: '/approvals-for-customer-changes',
                },
                {
                    title: 'Offline Adjustments',
                    page: '/offline-adjustments',
                },
                {
                    title: 'Update Changes',
                    page: '/update-changes',
                },
                {
                    title: 'Primary Update',
                    page: '/primary-update',
                },
                {
                    title: 'Bill Stopped Services',
                    page: '/bill-stopped-services',
                },
                {
                    title: 'Bill Stopped Services Approval',
                    page: '/bill-stopped-services-approval',
                },
                {
                    title: 'Bill Stop to Live',
                    page: '/bill-stop-to-live',
                },
                {
                    title: '!Bill Schedule!',
                    page: '/bill-schedule',
                },
            ]
        },
        {
            title: 'Reports',
            page: '/reports',
        }
    ]
}