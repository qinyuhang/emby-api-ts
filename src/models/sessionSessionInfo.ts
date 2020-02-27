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
import { PlayerStateInfo } from './playerStateInfo';
import { SessionUserInfo } from './sessionUserInfo';
import { TranscodingInfo } from './transcodingInfo';

export interface SessionSessionInfo { 
    playState?: PlayerStateInfo;
    additionalUsers?: Array<SessionUserInfo>;
    remoteEndPoint?: string;
    playableMediaTypes?: Array<string>;
    playlistItemId?: string;
    playlistIndex?: number;
    playlistLength?: number;
    id?: string;
    serverId?: string;
    userId?: string;
    userName: string;
    userPrimaryImageTag?: string;
    client?: string;
    lastActivityDate?: Date;
    deviceName?: string;
    deviceType?: string;
    nowPlayingItem?: BaseItemDto;
    deviceId?: string;
    applicationVersion?: string;
    appIconUrl?: string;
    supportedCommands?: Array<string>;
    transcodingInfo?: TranscodingInfo;
    supportsRemoteControl?: boolean;
}
