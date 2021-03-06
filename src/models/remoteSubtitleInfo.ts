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

export interface RemoteSubtitleInfo { 
    threeLetterISOLanguageName?: string;
    id?: string;
    providerName?: string;
    name?: string;
    format?: string;
    author?: string;
    comment?: string;
    dateCreated?: Date;
    communityRating?: number;
    downloadCount?: number;
    isHashMatch?: boolean;
    isForced?: boolean;
}