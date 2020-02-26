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
import { DlnaCodecProfile } from './dlnaCodecProfile';
import { DlnaContainerProfile } from './dlnaContainerProfile';
import { DlnaDeviceIdentification } from './dlnaDeviceIdentification';
import { DlnaDirectPlayProfile } from './dlnaDirectPlayProfile';
import { DlnaResponseProfile } from './dlnaResponseProfile';
import { DlnaSubtitleProfile } from './dlnaSubtitleProfile';
import { DlnaTranscodingProfile } from './dlnaTranscodingProfile';
import { DlnaXmlAttribute } from './dlnaXmlAttribute';

export interface DlnaDeviceProfile { 
    name?: string;
    id?: string;
    identification?: DlnaDeviceIdentification;
    friendlyName?: string;
    manufacturer?: string;
    manufacturerUrl?: string;
    modelName?: string;
    modelDescription?: string;
    modelNumber?: string;
    modelUrl?: string;
    serialNumber?: string;
    enableAlbumArtInDidl?: boolean;
    enableSingleAlbumArtLimit?: boolean;
    enableSingleSubtitleLimit?: boolean;
    supportedMediaTypes?: string;
    userId?: string;
    albumArtPn?: string;
    maxAlbumArtWidth?: number;
    maxAlbumArtHeight?: number;
    maxIconWidth?: number;
    maxIconHeight?: number;
    maxStreamingBitrate?: number;
    musicStreamingTranscodingBitrate?: number;
    maxStaticMusicBitrate?: number;
    sonyAggregationFlags?: string;
    protocolInfo?: string;
    timelineOffsetSeconds?: number;
    requiresPlainVideoItems?: boolean;
    requiresPlainFolders?: boolean;
    ignoreTranscodeByteRangeRequests?: boolean;
    xmlRootAttributes?: Array<DlnaXmlAttribute>;
    directPlayProfiles?: Array<DlnaDirectPlayProfile>;
    transcodingProfiles?: Array<DlnaTranscodingProfile>;
    containerProfiles?: Array<DlnaContainerProfile>;
    codecProfiles?: Array<DlnaCodecProfile>;
    responseProfiles?: Array<DlnaResponseProfile>;
    subtitleProfiles?: Array<DlnaSubtitleProfile>;
}