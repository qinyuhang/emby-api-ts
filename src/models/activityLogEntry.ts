/**
 * Emby Server API
 * Explore the Emby Server API
 *
 * OpenAPI spec version: 4.4.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ActivityLogEntry { 
    id?: number;
    name?: string;
    overview?: string;
    shortOverview?: string;
    type?: string;
    itemId?: string;
    date?: Date;
    userId?: string;
    userPrimaryImageTag?: string;
    severity?: ActivityLogEntry.SeverityEnum;
}
export namespace ActivityLogEntry {
    export type SeverityEnum = 'Info' | 'Debug' | 'Warn' | 'Error' | 'Fatal';
    export const SeverityEnum = {
        Info: 'Info' as SeverityEnum,
        Debug: 'Debug' as SeverityEnum,
        Warn: 'Warn' as SeverityEnum,
        Error: 'Error' as SeverityEnum,
        Fatal: 'Fatal' as SeverityEnum
    };
}