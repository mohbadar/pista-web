export class PageConfig {
    public defaults: any = {
        '': {
            'title': 'Dashboard',
            'desc': 'Latest updates and statistic charts'
        },
        configuration: {
            network: {
                'station-type': {
                    page: { title: 'Station Type', desc: '' }
                },
                'substation-master': {
                    page: { title: 'Substation Master', desc: '' }
                }
            },
            office: {
                'office-type': {
                    page: { title: 'Office Type', desc: '' }
                },
                'office-master': {
                    page: { title: 'Office Master', desc: '' }
                },
            },
            nsc: {
                'appliance-master': {
                    page: { title: 'Appliance Master', desc: '' }
                },
                'units-master': {
                    page: { title: 'Units Master', desc: '' }
                },
            },
            csc: {
                'request_type': {
                    page: { title: 'Request Type', desc: '' }
                },
                'request_complaint': {
                    page: { title: 'Request / Complaint', desc: '' }
                },
            },
            metering: {
                'meter-capacity-master': {
                    page: { title: 'Meter Capacity Master', desc: '' }
                },
                'meter-make-detail': {
                    page: { title: 'Meter Make Details', desc: '' }
                },
            },
            billing: {
                'tariff-parameters': {
                    page: { title: 'Tariff Parameters', desc: '' }
                },
                'category-type-master': {
                    page: { title: 'Category Type Master', desc: '' }
                },
            },
            payment: {
                'bank': {
                    page: { title: 'Bank Master', desc: '' }
                },
                'branch': {
                    page: { title: 'Bank Branches', desc: '' }
                },
            },
            province: {
                page: { title: 'Province', desc: '' }
            },
            'e-signature': {
                page: { title: 'E-Signature', desc: '' }
            }
        },
        'service-connection': {
            'service-connection-menu': {
                'online-service-connection': {
                    'online-service-registration': {
                        page: { title: 'Service Registration', desc: '' }
                    },
                    'online-dispatch': {
                        page: { title: 'Dispatchs', desc: '' }
                    },
                },
                'offline-service-connection': {
                    'nsc-offline': {
                        page: { title: 'NSC Offline', desc: '' }
                    },
                    'nsc-feedback-list': {
                        page: { title: 'NSC Feedback List', desc: '' }
                    },
                },
                'lpu-service-connection': {
                    'lpu-service-registration': {
                        page: { title: 'Service Registration', desc: '' }
                    },
                    'lpu-account-number-generation': {
                        page: { title: 'Account number generation', desc: '' }
                    },
                }
            },
            'customer-service': {

            },
            metering: {
            },
            billing: {
            },
            payments: {
            },
            helpdesk: {}
        }
    };

    public get configs(): any {
        return this.defaults;
    }
}
