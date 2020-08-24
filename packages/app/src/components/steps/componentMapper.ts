type DynamicImportType = () => Promise<{ default: React.ComponentType<any> }>;

export const componentMapper: { [key: string]: DynamicImportType } = {
  Instructions: () => import(/* webpackChunkName: "form-instructions" */'./Instructions'),
  Details: () => import(/* webpackChunkName: "form-details" */'./Details'),
  Declaration: () => import(/* webpackChunkName: "form-declaration" */'./Declaration'),
  Continuation: () => import(/* webpackChunkName: "form-continuation" */'./Continuation'),
  Employment: () => import(/* webpackChunkName: "form-employment" */'./Employment'),
  Review: () => import(/* webpackChunkName: "form-review" */'./Review'),
};
