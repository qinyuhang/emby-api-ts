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

export interface SyncSyncJob { 
    id?: number;
    targetId?: string;
    targetName?: string;
    quality?: string;
    bitrate?: number;
    container?: string;
    videoCodec?: string;
    audioCodec?: string;
    profile?: string;
    category?: SyncSyncJob.CategoryEnum;
    parentId?: number;
    progress?: number;
    name?: string;
    status?: SyncSyncJob.StatusEnum;
    userId?: number;
    unwatchedOnly?: boolean;
    syncNewContent?: boolean;
    itemLimit?: number;
    requestedItemIds?: Array<number>;
    dateCreated?: Date;
    dateLastModified?: Date;
    itemCount?: number;
    parentName?: string;
    primaryImageItemId?: string;
    primaryImageTag?: string;
}
export namespace SyncSyncJob {
    export type CategoryEnum = 'Latest' | 'NextUp' | 'Resume';
    export const CategoryEnum = {
        Latest: 'Latest' as CategoryEnum,
        NextUp: 'NextUp' as CategoryEnum,
        Resume: 'Resume' as CategoryEnum
    };
    export type StatusEnum = 'Queued' | 'Converting' | 'ReadyToTransfer' | 'Transferring' | 'Completed' | 'CompletedWithError' | 'Failed';
    export const StatusEnum = {
        Queued: 'Queued' as StatusEnum,
        Converting: 'Converting' as StatusEnum,
        ReadyToTransfer: 'ReadyToTransfer' as StatusEnum,
        Transferring: 'Transferring' as StatusEnum,
        Completed: 'Completed' as StatusEnum,
        CompletedWithError: 'CompletedWithError' as StatusEnum,
        Failed: 'Failed' as StatusEnum
    };
}