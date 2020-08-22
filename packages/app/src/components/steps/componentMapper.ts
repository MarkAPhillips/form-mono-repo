type DynamicImportType = () => Promise<{ default: React.ComponentType<any> }>;

export const componentMapper: { [key: string]: DynamicImportType } = {
  Instructions: () => import('./Instructions'),
  Details: () => import('./Details'),
  Declaration: () => import('./Declaration'),
  Continuation: () => import('./Continuation'),
  Employment: () => import('./Employment'),
  Review: () => import('./Review'),
};
