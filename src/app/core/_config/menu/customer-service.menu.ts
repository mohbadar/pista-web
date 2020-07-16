export const customerServiceMenuModule = {
    title: 'CUSTOMER SERVICE',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.CUSTOMER_SERVICE',
    page: '/customer-service',
    submenu: [
        {
            title: 'Customer Service',
            page: '',
            submenu: [
                {
                    title: 'Request Complaint',
                    page: '/complaints/list-complaint',
                },
                {
                    title: 'Query Service',
                    page: '/query-service',

                    submenu: [
                        {
                            title: 'Dispatch List',
                            page: '/dispatch-list',
                        },
                        {
                            title: 'Rejected Complaints',
                            page: '/rejected-complaints-list',
                        },
                        {
                            title: 'Ractified Queries',
                            page: '/ractified-queries-list',
                        },
                        {
                            title: 'Pending Reg',
                            page: '/pending-reg-list',
                        },
                        {
                            title: 'Re-Opened Complaints',
                            page: '/re-opened-complaints-list',
                        },
                        {
                            title: 'Closed Final Bill Request',
                            page: '/closed-final-bill-req-list',
                        },
                        {
                            title: 'Complaints Under Site Inspection',
                            page: '/complaints-under-site-inspection-list',
                        },
                    ]
                },
                {
                    title: 'Customer Changes',
                    page: '/customer-changes',

                    submenu: [
                        {
                            title: 'Title Transfer Changes',
                            page: '/title-transfer-change',
                        },
                        {
                            title: 'Title Transfer Complaints',
                            page: '/title-transfer-complaints',
                        },
                        {
                            title: 'Area Changes',
                            page: '/area-changes',
                        },
                        {
                            title: 'Area Changes Complaints',
                            page: '/area-changes-complaints',

                        },
                        {
                            title: 'Adress Correction',
                            page: '/address-correction',

                        },
                        {
                            title: 'Adress Correction Complaints',
                            page: '/address-correction-complaints',

                        },
                        {
                            title: 'Tariff Changes',
                            page: '/tariff-changes',

                        },
                        {
                            title: 'Name Correction Complaints',
                            page: '/name-correction-complaints',
                        },
                        {
                            title: 'Name Correction Requests',
                            page: '/name-correction-requests',
                        },
                        {
                            title: 'Tariff Correction Approval',
                            page: '/tariff-correction-approval',
                        },
                        {
                            title: 'Phase Correction Approvals',
                            page: '/phase-correction-approval',
                        },
                        {
                            title: 'Area Correction Requests',
                            page: '/area-correction-requests',

                        },
                        {
                            title: 'Area Correction Complaints',
                            page: '/area-correction-complaints',

                        },
                        {
                            title: 'Final Bill Complaints',
                            page: '/final-bill-complaints',
                        },
                        {
                            title: 'Close Bill Requests',
                            page: '/close-bill-requests',
                        },

                    ]
                },
                {
                    title: 'Supply Realated Complaints',
                    page: '/supply',

                    submenu: [
                        {
                            title: 'Supply Realated Complaints',
                            page: '/complaints'
                        },

                    ]
                },
                {
                    title: 'Meter Realated Complaints',
                    page: '/meter',

                    submenu: [
                        {
                            title: 'Job Order List',
                            page: '/job-order-list',
                        },
                        {
                            title: 'Calibration Report',
                            page: '/callibration-report',
                        },
                        {
                            title: 'Complaint Under Lab Appoval',
                            page: '/complaint-under-lab-approval',
                        },

                    ]
                },
                {
                    title: 'Billing Realated Complaints',
                    page: '/billing',

                    submenu: [
                        {
                            title: 'Complaints Under Bill Revision',
                            page: '/complaint-under-bill-revision',
                        },
                        {
                            title: 'Permanent Disconnection Service Order',
                            page: '/permanent-disconnection-service-order',
                        },

                    ]
                },
            ]
        },
        {
            title: 'Query Modification',
            page: '/query-modification',

            submenu: [
                {
                    title: 'Miscellaeous Invoice Generation',
                    page: '/miscellaeous-invoice-generation',
                },
                {
                    title: 'Debit Journal Entry',
                    page: '/debit-journal-entry',
                },
                {
                    title: 'Credit Jornal Entry',
                    page: '/credit-journal-entry',
                },
                {
                    title: 'RJ Approval',
                    page: '/rj-approval',
                },
            ]
        },
        {
            title: 'Escalations',
            page: '/escalation',

            submenu: [
                {
                    title: 'First Escalations',
                    page: '/first-escalation-list',
                },
                {
                    title: 'Second Escalations',
                    page: '/second-escalation-list',
                },
                {
                    title: 'Beyond Escalation',
                    page: '/beyond-escalation-list',
                },
                {
                    title: 'Exp',
                    page: '/exp',
                },
            ]
        },
        {
            title: 'Aknowledgments',
            page: '/aknowledgment',

            submenu: [
                {
                    title: 'Registeration',
                    page: '/registeration',
                },
                {
                    title: 'Dispatch',
                    page: '/dispatch',
                },
                {
                    title: 'Complaint Status',
                    page: '/complaint-status',
                },
                {
                    title: 'Check Master Complaint Status',
                    page: '/meter-complaint-status',
                },
            ]
        },
        {
            title: 'Reports',
            page: '/reports',

            submenu: [
                {
                    title: 'Status Report',
                    page: '/status-report',
                },
                {
                    title: 'Query Registerd Report',
                    page: '/query-reg-report',
                },
                {
                    title: 'Rectified Complaint Report',
                    page: '/rectified-complaint-report',
                },
                {
                    title: 'Query Aknowledge Report',
                    page: '/query-aknowledge-report',
                },
                {
                    title: 'Category Changes',
                    page: '/category-change-report',
                },
                {
                    title: 'Phase Changes Report',
                    page: '/phase-change-report',
                },
                {
                    title: 'Name Change Report',
                    page: '/name-change-report',
                },
                {
                    title: '!RJ Wrong Posting Report!',
                    page: '/rjwrong-posting-report',
                },
                {
                    title: '!RJ Wrong Post Pending Report!',
                    page: '/rjwrong-posting-pending-report',
                },

            ]
        },
        {
            title: 'eCall Reports',
            page: '',

            submenu: [
                {
                    title: 'eCall Reports',
                    page: '/dispatch-list',
                },
                {
                    title: 'Feadback Reports',
                    page: '/rejected-complaints/rejected-complaints-list',
                },
            ]
        },
        {
            title: 'eCall Registeration',
            page: '',

            submenu: [
                {
                    title: 'IVRS Registeration',
                    page: '/dispatch-list',
                },
                {
                    title: 'Complaint Status',
                    page: '/rejected-complaints/rejected-complaints-list',
                },
                {
                    title: 'Feadback Of Complaint',
                    page: '/ractified-queries/ractified-queries-list',
                },
                {
                    title: 'Feadback Captured',
                    page: '/ractified-queries/ractified-queries-list',
                }
            ]
        }

    ]
}