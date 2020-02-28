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
import { MediaSourceInfo } from './mediaSourceInfo';

export interface MediaInfoPlaybackInfoResponse { 
    mediaSources?: Array<MediaSourceInfo>;
    playSessionId?: string;
    errorCode?: MediaInfoPlaybackInfoResponse.ErrorCodeEnum;
}
export namespace MediaInfoPlaybackInfoResponse {
    export type ErrorCodeEnum = 'NotAllowed' | 'NoCompatibleStream' | 'RateLimitExceeded';
    export const ErrorCodeEnum = {
        NotAllowed: 'NotAllowed' as ErrorCodeEnum,
        NoCompatibleStream: 'NoCompatibleStream' as ErrorCodeEnum,
        RateLimitExceeded: 'RateLimitExceeded' as ErrorCodeEnum
    };
}