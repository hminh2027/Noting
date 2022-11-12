export const USER_PERMISSIONS = {
  1: {
    name: "Can view",
    description: "Cannot view not share with others.",
    permission: 0,
  },
  2: {
    name: "Can comment",
    description: "Can view and comment but not edit.",
    permission: 1,
  },
  3: {
    name: "Can edit",
    description: "Can edit, but not share with others.",
    permission: 2,
  },
  4: {
    name: "Full access",
    description: "Can edit and share with others.",
    permission: 3,
  },
};
