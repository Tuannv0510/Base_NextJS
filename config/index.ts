const config = {
  routerPathCustomer: {
    admin: "customer/admin",
    home: "customer",
    software: "customer/software",
    list_software: "customer/list-software",
    ticket: "customer/ticket",
    payment: "customer/payment",
    affiliate: "customer/affiliate",
    history: "customer/history",
    activity: "customer/activity",
    profile: "customer/profile",
    chat: "customer/chat",
    machine: "customer/machine",
  },
  routerPathEmployee: {
    dashboard: "employee",
    listCustommer: "employee/custommers",
    addCustommer: "employee/custommers/add-customer",
    utilities: "employee/utilities",
    listLicense: "employee/licenses",
    listLicenseTrial: "employee/licenses/trials",
    listLicenseTrashed: "employee/licenses/trashed",

    overviewAcengy: "employee/agencies",
    managerAgency: "employee/agencies/manager",
    staffAgency: "employee/agencies/staffs",
    historydeposit: "employee/agencies/deposits",

    listStaff: "employee/staffs",
    addStaff: "employee/staffs/add-staff",
    listKpi: "employee/staffs/kpis",
    addKpi: "employee/staffs/kpis/add-kpi",

    licenseReport: "employee/reports/licenses",
    licenseTrialReport: "employee/reports/licenses/trials",
  },
};

export default config;
