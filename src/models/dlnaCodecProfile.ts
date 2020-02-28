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
import { DlnaProfileCondition } from './dlnaProfileCondition';

export interface DlnaCodecProfile { 
    type?: DlnaCodecProfile.TypeEnum;
    conditions?: Array<DlnaProfileCondition>;
    applyConditions?: Array<DlnaProfileCondition>;
    codec?: string;
    container?: string;
}
export namespace DlnaCodecProfile {
    export type TypeEnum = 'Video' | 'VideoAudio' | 'Audio';
    export const TypeEnum = {
        Video: 'Video' as TypeEnum,
        VideoAudio: 'VideoAudio' as TypeEnum,
        Audio: 'Audio' as TypeEnum
    };
}