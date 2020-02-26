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

export interface CoverArtEntitiesProfileDefinition { 
    imageSets?: Array<string>;
    overlays?: Array<string>;
    customOverlayPath?: string;
    directory?: string;
    coverByDefinition?: boolean;
    useContainerType?: boolean;
    createBackdrops?: boolean;
    enhanceBanners?: boolean;
    oldestCoverFirst?: boolean;
    useArtAspect?: boolean;
    typeMap?: Array<string>;
}