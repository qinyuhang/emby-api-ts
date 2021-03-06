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
import { CommonPluginsIPlugin } from './commonPluginsIPlugin';

export interface WebDashboardApiConfigurationPageInfo { 
    name?: string;
    enableInMainMenu?: boolean;
    menuSection?: string;
    menuIcon?: string;
    displayName?: string;
    configurationPageType?: WebDashboardApiConfigurationPageInfo.ConfigurationPageTypeEnum;
    pluginId?: string;
    plugin?: CommonPluginsIPlugin;
    translations?: Array<string>;
}
export namespace WebDashboardApiConfigurationPageInfo {
    export type ConfigurationPageTypeEnum = 'PluginConfiguration' | 'None';
    export const ConfigurationPageTypeEnum = {
        PluginConfiguration: 'PluginConfiguration' as ConfigurationPageTypeEnum,
        None: 'None' as ConfigurationPageTypeEnum
    };
}