export type PermissionConfig = typeof permissionConfig;

export const permissionConfig = {
  methods: ["create", "read", "update", "delete"],
  modules: [
    "user",
    "customer",
    "role",
    "permission",
    "plan",
    "planfeature",
    "plansubscription",
    "product",
    "invoice",
    "team",
    "branch",
    "kpi",
    "bank",
    "activity",
    "changelog",
    "fbjs",
    "emailtemplate",
    "emaillog",
    "banner",
  ],
};
