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

export interface RemoteImageInfo { 
    providerName?: string;
    url?: string;
    thumbnailUrl?: string;
    height?: number;
    width?: number;
    communityRating?: number;
    voteCount?: number;
    language?: string;
    type?: RemoteImageInfo.TypeEnum;
    ratingType?: RemoteImageInfo.RatingTypeEnum;
}
export namespace RemoteImageInfo {
    export type TypeEnum = 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail';
    export const TypeEnum = {
        Primary: 'Primary' as TypeEnum,
        Art: 'Art' as TypeEnum,
        Backdrop: 'Backdrop' as TypeEnum,
        Banner: 'Banner' as TypeEnum,
        Logo: 'Logo' as TypeEnum,
        Thumb: 'Thumb' as TypeEnum,
        Disc: 'Disc' as TypeEnum,
        Box: 'Box' as TypeEnum,
        Screenshot: 'Screenshot' as TypeEnum,
        Menu: 'Menu' as TypeEnum,
        Chapter: 'Chapter' as TypeEnum,
        BoxRear: 'BoxRear' as TypeEnum,
        Thumbnail: 'Thumbnail' as TypeEnum
    };
    export type RatingTypeEnum = 'Score' | 'Likes';
    export const RatingTypeEnum = {
        Score: 'Score' as RatingTypeEnum,
        Likes: 'Likes' as RatingTypeEnum
    };
}