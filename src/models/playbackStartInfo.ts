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
import { BaseItemDto } from './baseItemDto';
import { QueueItem } from './queueItem';

export interface PlaybackStartInfo { 
    canSeek?: boolean;
    item?: BaseItemDto;
    nowPlayingQueue?: Array<QueueItem>;
    playlistItemId?: string;
    itemId?: string;
    sessionId?: string;
    mediaSourceId?: string;
    audioStreamIndex?: number;
    subtitleStreamIndex?: number;
    isPaused?: boolean;
    playlistIndex?: number;
    playlistLength?: number;
    isMuted?: boolean;
    positionTicks?: number;
    runTimeTicks?: number;
    playbackStartTimeTicks?: number;
    volumeLevel?: number;
    brightness?: number;
    aspectRatio?: string;
    eventName?: PlaybackStartInfo.EventNameEnum;
    playMethod?: PlaybackStartInfo.PlayMethodEnum;
    liveStreamId?: string;
    playSessionId?: string;
    repeatMode?: PlaybackStartInfo.RepeatModeEnum;
}
export namespace PlaybackStartInfo {
    export type EventNameEnum = 'TimeUpdate' | 'Pause' | 'Unpause' | 'VolumeChange' | 'RepeatModeChange' | 'AudioTrackChange' | 'SubtitleTrackChange' | 'PlaylistItemMove' | 'PlaylistItemRemove' | 'PlaylistItemAdd' | 'QualityChange' | 'StateChange';
    export const EventNameEnum = {
        TimeUpdate: 'TimeUpdate' as EventNameEnum,
        Pause: 'Pause' as EventNameEnum,
        Unpause: 'Unpause' as EventNameEnum,
        VolumeChange: 'VolumeChange' as EventNameEnum,
        RepeatModeChange: 'RepeatModeChange' as EventNameEnum,
        AudioTrackChange: 'AudioTrackChange' as EventNameEnum,
        SubtitleTrackChange: 'SubtitleTrackChange' as EventNameEnum,
        PlaylistItemMove: 'PlaylistItemMove' as EventNameEnum,
        PlaylistItemRemove: 'PlaylistItemRemove' as EventNameEnum,
        PlaylistItemAdd: 'PlaylistItemAdd' as EventNameEnum,
        QualityChange: 'QualityChange' as EventNameEnum,
        StateChange: 'StateChange' as EventNameEnum
    };
    export type PlayMethodEnum = 'Transcode' | 'DirectStream' | 'DirectPlay';
    export const PlayMethodEnum = {
        Transcode: 'Transcode' as PlayMethodEnum,
        DirectStream: 'DirectStream' as PlayMethodEnum,
        DirectPlay: 'DirectPlay' as PlayMethodEnum
    };
    export type RepeatModeEnum = 'RepeatNone' | 'RepeatAll' | 'RepeatOne';
    export const RepeatModeEnum = {
        RepeatNone: 'RepeatNone' as RepeatModeEnum,
        RepeatAll: 'RepeatAll' as RepeatModeEnum,
        RepeatOne: 'RepeatOne' as RepeatModeEnum
    };
}