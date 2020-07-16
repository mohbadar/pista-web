export const serviceConnectionMenuModule = {
    title: 'ServiceConnection',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.SERVICE_CONNECTION',
    page: '/service-connection',
    submenu: [
        {
            title: 'Online Service Connection',
            page: '/service-connection-menu/online-service-connection',

            submenu: [
                {
                    title: 'Service Registration',
                    page: '/online-service-registration',
                },
                {
                    title: 'Dispatch',
                    page: '/online-dispatch',
                },
                {
                    title: 'Site Inspection',
                    page: '/online-site-inspection',
                },
                {
                    title: 'Site Inspection Rejection',
                    page: '/online-site-inspection-rejection',
                },
                {
                    title: 'Load Approval',
                    page: '/online-load-approval/load-approval',
                },
                {
                    title: 'Transformer Updation',
                    page: '/online-transformer-updation',
                },
                {
                    title: 'New Meterbox Installation',
                    page: '/online-meterbox-installation',
                },
                {
                    title: 'Estimate',
                    page: '/online-estimate',
                },
                {
                    title: 'Returned Estimate',
                    page: '/online-returned-estimate',
                },
                {
                    title: 'Estimate Approval',
                    page: '/online-estimate-approval',
                },
                {
                    title: 'Consumer intemation',
                    page: '/online-consumer-intemation',
                },
                {
                    title: 'Rejected Services',
                    page: '/online-rejected-services',
                },
                {
                    title: 'Account Number Generation',
                    page: '/online-account-number-generation',
                },
                {
                    title: 'Commission of Installation',
                    page: '/online-commission-installation',
                },
                {
                    title: 'Store Approval',
                    page: '/online-store-approval',
                },
                {
                    title: 'Wo Completion',
                    page: '/online-wo-completion',
                },
                {
                    title: 'Service Release',
                    page: '/online-service-release',
                },
                {
                    title: 'Inbox Userview',
                    page: '/online-inbox-userview',
                },
                {
                    title: 'Grid Extension Bill',
                    page: '/online-grid-extension-bill',
                },
                {
                    title: 'Approves Transformer Updation',
                    page: '/online-approves-transformer-updation',
                },
                {
                    title: 'Permanently Rejected',
                    page: '/online-permanently-rejected',
                }
            ]
        },

        {
            title: 'Offline Service Connection',
            page: '/service-connection-menu/offline-service-connection',

            submenu: [
                {
                    title: 'NSC Offline',
                    page: '/nsc-offline',
                },
                {
                    title: 'NSC Feedback List',
                    page: '/nsc-feedback-list',
                },
            ]
        },

        {
            title: 'LPU Service Connection',
            page: '/service-connection-menu/lpu-service-connection',

            submenu: [
                {
                    title: 'Service Registration',
                    page: '/lpu-service-registration',
                },
                {
                    title: 'Account number generation',
                    page: '/lpu-account-number-generation',
                },
                {
                    title: 'Assign relay department member by RM',
                    page: '/lpu-assign-relay-dep-mem-by-rm',
                },
                {
                    title: 'Assign site inspection member by ECD',
                    page: '/lpu-assign-site-ins-mem-by-ecd',
                },
                {
                    title: 'Assigning site inspector',
                    page: '/lpu-assigning-site-inspector',
                },
                {
                    title: 'Commitment letter upload',
                    page: '/lpu-commitment-letter-upload',
                },
                {
                    title: 'Compensation charges estimation',
                    page: '/lpu-compensation-charges-estimation',
                },
                {
                    title: 'Coo review',
                    page: '/lpu-coo-review',
                },
                {
                    title: 'DP review',
                    page: '/lpu-dp-review',
                },
                {
                    title: 'Electro technic department',
                    page: '/lpu-electro-technic-dep',
                },
                {
                    title: 'First consumer intimation',
                    page: '/lpu-first-consumer-intimation',
                },
                {
                    title: 'First site inspection report approval coo',
                    page: '/lpu-first-site-ins-rep-app-coo',
                },
                {
                    title: 'First site inspection report approval DPO',
                    page: '/lpu-first-site-ins-rep-app-coo',
                },
                {
                    title: 'First site inspection report approval MD',
                    page: '/lpu-first-site-ins-rep-app-coo',
                },
                {
                    title: 'First site inspection report approval OD',
                    page: '/lpu-first-site-ins-rep-app-coo',
                },
                {
                    title: 'Junction station assigning member',
                    page: '/lpu-junction-station-ass-mem',
                },
                {
                    title: 'Meter factor determ report by RDM',
                    page: '/lpu-meter-factor-determ-rep-by-rdm',
                },
                {
                    title: 'Meter lab office review',
                    page: '/lpu-meter-lab-office-review',
                },
                {
                    title: 'MSM-review',
                    page: '/lpu-msm-review',
                },
                {
                    title: 'MSM-review-approval',
                    page: '/lpu-msm-review-approval',
                },
                {
                    title: 'Network expansion manager review',
                    page: '/lpu-network-expansion-manager-review',
                },
                {
                    title: 'NM approval to check DTR',
                    page: '/lpu-nm-app-to-check-dtr',
                },
                {
                    title: 'PED manager',
                    page: '/lpu-ped-manager',
                },
                {
                    title: 'Relay report approval by RM',
                    page: '/lpu-relay-rep-app-by-rm',
                },
                {
                    title: 'Second site inspection PED inspector',
                    page: '/lpu-sec-site-ins-ped-inspector',
                },
                {
                    title: 'Second consumer intimation',
                    page: '/lpu-second-consumer-intimation',
                },
                {
                    title: 'Serials recheck',
                    page: '/lpu-serials-recheck',
                },
                {
                    title: 'Service release',
                    page: '/lpu-service-release',
                },
                {
                    title: 'Technical inspection approval by PED',
                    page: '/lpu-technical-ins-app-by-ped',
                },
                {
                    title: 'Time allocation',
                    page: '/lpu-time-allocation',
                },
                {
                    title: 'Transformer connection',
                    page: '/lpu-transformer-connection',
                },
                {
                    title: 'Transformer maintenance DEP',
                    page: '/lpu-transformer-maintenance-dep',
                },
                {
                    title: 'Estimation',
                    page: '/lpu-transformer-connection',
                },
            ]
        },
        // {
        //     title: 'Complaints to Be Closed',
        //     page: '/wizard/wizard-1',

        //     submenu: [
        //         {
        //             title: 'Rectified Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Info Required Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },
        //         {
        //             title: 'Duplicate Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Invalid Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },
        //     ]
        // },
        // {
        //     title: 'Super User Observations',
        //     page: '/wizard/wizard-1',

        //     submenu: [
        //         {
        //             title: 'Pending Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Rectified Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Information Required Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },
        //         {
        //             title: 'Duplicate Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Invalid Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },

        //         {
        //             title: 'Total Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //     ]
        // },

    ]
}