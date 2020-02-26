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

export interface EmbyNotificationsApiNotificationsSummary { 
    unreadCount?: number;
    maxUnreadNotificationLevel?: EmbyNotificationsApiNotificationsSummary.MaxUnreadNotificationLevelEnum;
}
export namespace EmbyNotificationsApiNotificationsSummary {
    export type MaxUnreadNotificationLevelEnum = 'Normal' | 'Warning' | 'Error';
    export const MaxUnreadNotificationLevelEnum = {
        Normal: 'Normal' as MaxUnreadNotificationLevelEnum,
        Warning: 'Warning' as MaxUnreadNotificationLevelEnum,
        Error: 'Error' as MaxUnreadNotificationLevelEnum
    };
}