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
import { ConfigurationAccessSchedule } from './configurationAccessSchedule';

export interface UsersUserPolicy { 
    isAdministrator?: boolean;
    isHidden?: boolean;
    isHiddenRemotely?: boolean;
    isDisabled?: boolean;
    maxParentalRating?: number;
    blockedTags?: Array<string>;
    isTagBlockingModeInclusive?: boolean;
    enableUserPreferenceAccess?: boolean;
    accessSchedules?: Array<ConfigurationAccessSchedule>;
    blockUnratedItems?: Array<UsersUserPolicy.BlockUnratedItemsEnum>;
    enableRemoteControlOfOtherUsers?: boolean;
    enableSharedDeviceControl?: boolean;
    enableRemoteAccess?: boolean;
    enableLiveTvManagement?: boolean;
    enableLiveTvAccess?: boolean;
    enableMediaPlayback?: boolean;
    enableAudioPlaybackTranscoding?: boolean;
    enableVideoPlaybackTranscoding?: boolean;
    enablePlaybackRemuxing?: boolean;
    enableContentDeletion?: boolean;
    enableContentDeletionFromFolders?: Array<string>;
    enableContentDownloading?: boolean;
    enableSubtitleDownloading?: boolean;
    enableSubtitleManagement?: boolean;
    enableSyncTranscoding?: boolean;
    enableMediaConversion?: boolean;
    enabledDevices?: Array<string>;
    enableAllDevices?: boolean;
    enabledChannels?: Array<string>;
    enableAllChannels?: boolean;
    enabledFolders?: Array<string>;
    enableAllFolders?: boolean;
    invalidLoginAttemptCount?: number;
    enablePublicSharing?: boolean;
    blockedMediaFolders?: Array<string>;
    blockedChannels?: Array<string>;
    remoteClientBitrateLimit?: number;
    authenticationProviderId?: string;
    excludedSubFolders?: Array<string>;
    disablePremiumFeatures?: boolean;
    simultaneousStreamLimit?: number;
}
export namespace UsersUserPolicy {
    export type BlockUnratedItemsEnum = 'Movie' | 'Trailer' | 'Series' | 'Music' | 'Game' | 'Book' | 'LiveTvChannel' | 'LiveTvProgram' | 'ChannelContent' | 'Other';
    export const BlockUnratedItemsEnum = {
        Movie: 'Movie' as BlockUnratedItemsEnum,
        Trailer: 'Trailer' as BlockUnratedItemsEnum,
        Series: 'Series' as BlockUnratedItemsEnum,
        Music: 'Music' as BlockUnratedItemsEnum,
        Game: 'Game' as BlockUnratedItemsEnum,
        Book: 'Book' as BlockUnratedItemsEnum,
        LiveTvChannel: 'LiveTvChannel' as BlockUnratedItemsEnum,
        LiveTvProgram: 'LiveTvProgram' as BlockUnratedItemsEnum,
        ChannelContent: 'ChannelContent' as BlockUnratedItemsEnum,
        Other: 'Other' as BlockUnratedItemsEnum
    };
}