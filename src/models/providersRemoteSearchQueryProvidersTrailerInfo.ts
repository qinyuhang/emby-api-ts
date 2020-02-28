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
import { ProvidersTrailerInfo } from './providersTrailerInfo';

export interface ProvidersRemoteSearchQueryProvidersTrailerInfo { 
    searchInfo?: ProvidersTrailerInfo;
    itemId?: number;
    searchProviderName?: string;
    includeDisabledProviders?: boolean;
}