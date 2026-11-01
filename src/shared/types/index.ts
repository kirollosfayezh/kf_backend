/**
 * Domain types. Plain TS interfaces — routes/services depend only on these,
 * never on Mongoose directly. One module per area; import from here.
 */
export * from "./leads.js";
export * from "./content.js";
export * from "./settings.js";
export * from "./analytics.js";
export * from "./admin.js";
export * from "./chat.js";
export * from "./crm.js";
export * from "./sales.js";
export * from "./newsletter.js";
