/** Dashboard accounts. */

export interface AdminUser extends Record<string, unknown> {
  email: string;
  passwordHash: string;
  name?: string;
  role: "admin";
  createdAt: string;
}
