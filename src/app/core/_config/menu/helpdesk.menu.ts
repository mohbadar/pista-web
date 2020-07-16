export const helpdeskMenuModule = {
    title: 'HelpDesk',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.HELPDESK',
    page: '/helpdesk',
    submenu: [
        {
            title: 'Registration',
            page: '',

            submenu: [
                {
                    title: 'Registration',
                    page: '',
                },
                {
                    title: 'Complaint Status',
                    page: '/complaint-status'
                },
            ]
        },
        {
            title: 'Dispatch',

            page: '/dispatch-complaints',
        },
        {
            title: 'Complaints to Be Closed',
            page: '/complaints',

            submenu: [
                {
                    title: 'Rectified Complaints',
                    page: '/rectified',
                },
                {
                    title: 'Info Required Complaints',
                    page: '/inforeq'
                },
                {
                    title: 'Duplicate Complaints',
                    page: '/duplicate',
                },
                {
                    title: 'Invalid Complaints',
                    page: '/invalid'
                },
            ]
        },
        // {
        //     title: 'Super User Observations',
        //     page: '/helpdesk',
        //     
        //     submenu: [
        //         {
        //             title: 'Pending Complaints',
        //             page: '/helpdesk/admin/complaints/pending',
        //         },
        //         {
        //             title: 'Rectified Complaints',
        //             page: '/helpdesk/admin/complaints/rectified',
        //         },
        //         {
        //             title: 'Information Required Complaints',
        //             page: '/helpdesk/admin/complaints/info_required'
        //         },
        //         {
        //             title: 'Duplicate Complaints',
        //             page: '/helpdesk/admin/complaints/duplicate',
        //         },
        //         {
        //             title: 'Invalid Complaints',
        //             page: '/helpdesk/admin/complaints/invalid'
        //         },

        //         {
        //             title: 'Total Complaints',
        //             page: '/helpdesk/admin/complaints/total',
        //         },
        //     ]
        // },

    ]
}