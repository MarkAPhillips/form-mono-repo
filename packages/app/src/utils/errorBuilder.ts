export const getErrorMessage = (error: any, field: string) => (
   error && error[field] ? error[field].message : undefined
);
