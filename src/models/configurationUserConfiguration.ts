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

export interface ConfigurationUserConfiguration { 
    audioLanguagePreference?: string;
    playDefaultAudioTrack?: boolean;
    subtitleLanguagePreference?: string;
    displayMissingEpisodes?: boolean;
    groupedFolders?: Array<string>;
    subtitleMode?: ConfigurationUserConfiguration.SubtitleModeEnum;
    displayCollectionsView?: boolean;
    enableLocalPassword?: boolean;
    orderedViews?: Array<string>;
    latestItemsExcludes?: Array<string>;
    myMediaExcludes?: Array<string>;
    hidePlayedInLatest?: boolean;
    rememberAudioSelections?: boolean;
    rememberSubtitleSelections?: boolean;
    enableNextEpisodeAutoPlay?: boolean;
}
export namespace ConfigurationUserConfiguration {
    export type SubtitleModeEnum = 'Default' | 'Always' | 'OnlyForced' | 'None' | 'Smart';
    export const SubtitleModeEnum = {
        Default: 'Default' as SubtitleModeEnum,
        Always: 'Always' as SubtitleModeEnum,
        OnlyForced: 'OnlyForced' as SubtitleModeEnum,
        None: 'None' as SubtitleModeEnum,
        Smart: 'Smart' as SubtitleModeEnum
    };
}