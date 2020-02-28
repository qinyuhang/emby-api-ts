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

export interface SyncModelSyncedItemProgress { 
    progress?: number;
    status?: SyncModelSyncedItemProgress.StatusEnum;
}
export namespace SyncModelSyncedItemProgress {
    export type StatusEnum = 'Queued' | 'Converting' | 'ReadyToTransfer' | 'Transferring' | 'Synced' | 'Failed';
    export const StatusEnum = {
        Queued: 'Queued' as StatusEnum,
        Converting: 'Converting' as StatusEnum,
        ReadyToTransfer: 'ReadyToTransfer' as StatusEnum,
        Transferring: 'Transferring' as StatusEnum,
        Synced: 'Synced' as StatusEnum,
        Failed: 'Failed' as StatusEnum
    };
}