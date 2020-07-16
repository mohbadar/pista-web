export const meteringMenuModule = {
    title: 'Metering',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.METERING',
    page: '/metering',
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
                    title: 'Meter Status',
                    page: '/meter-status'
                }
            ]
        },
        {
            title: 'Meter Reading',
            page: '/meter-reading',

            submenu: [
                {
                    title: 'Meter Reading Entry',
                    page: '/meter-reading-entry',

                    submenu: [
                        {
                            title: 'Route Wise Meter Reading Entry',
                            page: '/route-wise',
                        },
                        {
                            title: 'Single Manual Meter Reading Entry',
                            page: '/single-manual',
                        }
                        ,
                        {
                            title: 'Group Reading Entry',
                            page: '/group',
                        }

                        ,
                        {
                            title: 'Bulk Reading Entry',
                            page: '/bulk-entry',
                        }
                        ,
                        {
                            title: 'Meter Reading Anomalies',
                            page: '/anomalies',
                        }
                        ,
                        {
                            title: 'Reading Modify Requests',
                            page: '/reading-modify-requests',
                        },
                        {
                            title: 'Online New Service Consumers',
                            page: '/online-new-service-consumers',
                        }
                    ]
                },
                {
                    title: 'Meter Reading Sheet',
                    page: '/meter-reading-sheet',

                    submenu: [
                        {
                            title: 'Bulk Reading Sheet',
                            page: '/bulk',
                        },
                        {
                            title: 'Group Reading Sheet',
                            page: '/group',
                        },
                        {
                            title: 'Meter Reading Sheet Generation For LPU',
                            page: '/generation-for-lpu',
                        }
                    ]
                }, {
                    title: 'Hand Held Device',
                    page: '/hand-held-device',

                    submenu: [
                        {
                            title: 'Exporting To Xml File',
                            page: '/exporting-to-xml',
                        },
                        {
                            title: 'Exproting in DB',
                            page: '/exporting-in-db',
                        }
                    ]
                },
                {
                    title: 'Meter Routing And Scheduling',
                    page: '/meter-routing-scheduling',

                    submenu: [
                        {
                            title: 'Control Of Junctions for Sequencing',
                            page: '/junctions-control-sequencing',
                        },
                        {
                            title: 'Sequencing',
                            page: '/sequencing',
                        },
                        {
                            title: 'Pole Sequencing',
                            page: '/pole-sequencing',
                        },
                        {
                            title: 'Route Code Generation',
                            page: '/route-code-generation',
                        }
                    ]
                }
            ]
        },
        {
            title: 'Meter Stock',
            page: '/meter-stock',

            submenu: [
                {
                    title: 'Meter Stock Details',
                    page: '/meter-stock-details',

                    submenu: [
                        {
                            title: 'Meter Bulk Upload',
                            page: '/meter-bulk-upload',
                        },
                        {
                            title: 'Meter Approvals',
                            page: '/meter-approvals',
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
                    title: 'Meter Related Complaints',
                    page: '/meter-related-complaints',
                },
                {
                    title: 'Job Order',
                    page: '/job-order',
                },
                {
                    title: 'Service Order Transfer',
                    page: '/service-order-transfer',
                },
                {
                    title: 'JSM Service Order Transfer',
                    page: '/jsm-service-order-transfer',
                },
                {
                    title: 'Final Bill Request',
                    page: '/final-bill-request',
                }
            ]
        },
        {
            title: 'Reports',
            page: '/reports',

            submenu: [
                {
                    title: 'Reports List',
                    page: '/reports-list',

                    submenu: [
                        {
                            title: 'Meter Details Report',
                            page: '/meter-details',
                        },
                        {
                            title: 'Zone Date Report',
                            page: '/zone-date',
                        }
                        ,
                        {
                            title: 'Transformers Under Meter Reader',
                            page: '/transformers-meter-reader',
                        }
                        ,
                        {
                            title: 'Hand Held Import Data Report',
                            page: '/hand-held-import-data',
                        }
                        ,
                        {
                            title: 'Hand Held Export',
                            page: '/hand-held-export',
                        }
                        ,
                        {
                            title: 'Reading Log Report',
                            page: '/reading-log',
                        }
                    ]
                },
                {
                    title: 'Junction Wise Reports',
                    page: '/junction-wise',

                    submenu: [
                        {
                            title: 'Consumption Report',
                            page: '/consumption',
                        },
                        {
                            title: 'Anomalies Report By Cycle and Year',
                            page: '/anomaly-report',
                        },
                        {
                            title: 'Readings Unentered Report by Cycle and Year',
                            page: '/readings-unentered',
                        }
                        ,
                        {
                            title: 'Nil Consumption Report by Cycle and Year',
                            page: '/nil-consumption',
                        }
                        ,
                        {
                            title: 'Customer Wise Reading Entry Report',
                            page: '/cw-reading-entry',
                        }
                        ,
                        {
                            title: 'Customer Wise Anomaly Approval Report',
                            page: '/cw-anomaly-approval',
                        },
                        {
                            title: 'Junction Wise Anomaly Report',
                            page: '/junction-wise-anomaly',
                        },
                        {
                            title: 'Group Wise Anomaly Report',
                            page: '/group-wise-anomaly',
                        }
                    ]
                }

            ]
        }
        ,
        {
            title: 'Mobile Approvals',
            page: '/mobile-approvals',

            submenu: [
                {
                    title: 'Meter Reader Approval',
                    page: '/meter-reader-approval',
                },
                {
                    title: 'Readings Approval',
                    page: '/readings',
                },
                {
                    title: 'Rejected Readings',
                    page: '/rejected-readings',
                },
                {
                    title: 'Reader Deactivation',
                    page: '/reader-deactivation',
                },
                {
                    title: 'RPS Anomalies',
                    page: '/rps-anomalies',
                },
                {
                    title: 'Case Book For LPU',
                    page: '/case-book-lpu',
                },
                {
                    title: 'Case Book For Non LPU',
                    page: '/case-book-non-lpu',
                },
                {
                    title: 'Case Book For Transformer',
                    page: '/case-book-transformer',
                },
                {
                    title: 'MSS Approval',
                    page: '/mss-approval',
                },
                {
                    title: 'Spot Billing Status Report',
                    page: '/spot-billing-status-report',
                }
            ]
        }
    ]
}