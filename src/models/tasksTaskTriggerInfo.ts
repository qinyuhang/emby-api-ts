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

export interface TasksTaskTriggerInfo { 
    type?: string;
    timeOfDayTicks?: number;
    intervalTicks?: number;
    systemEvent?: TasksTaskTriggerInfo.SystemEventEnum;
    dayOfWeek?: TasksTaskTriggerInfo.DayOfWeekEnum;
    maxRuntimeTicks?: number;
}
export namespace TasksTaskTriggerInfo {
    export type SystemEventEnum = 'WakeFromSleep' | 'DisplayConfigurationChange' | 'NetworkChange';
    export const SystemEventEnum = {
        WakeFromSleep: 'WakeFromSleep' as SystemEventEnum,
        DisplayConfigurationChange: 'DisplayConfigurationChange' as SystemEventEnum,
        NetworkChange: 'NetworkChange' as SystemEventEnum
    };
    export type DayOfWeekEnum = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
    export const DayOfWeekEnum = {
        Sunday: 'Sunday' as DayOfWeekEnum,
        Monday: 'Monday' as DayOfWeekEnum,
        Tuesday: 'Tuesday' as DayOfWeekEnum,
        Wednesday: 'Wednesday' as DayOfWeekEnum,
        Thursday: 'Thursday' as DayOfWeekEnum,
        Friday: 'Friday' as DayOfWeekEnum,
        Saturday: 'Saturday' as DayOfWeekEnum
    };
}