import { BirdEntity } from './entity/BirdEntity';
import { SpeciesEntity } from './entity/SpeciesEntity';
export type * from './VogelwarteSchweizTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { VogelwarteSchweizEntityBase } from './VogelwarteSchweizEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class VogelwarteSchweizSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Bird(entopts?: Record<string, any>): BirdEntity;
    Species(entopts?: Record<string, any>): SpeciesEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): VogelwarteSchweizSDK;
    tester(testopts?: any, sdkopts?: any): VogelwarteSchweizSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof VogelwarteSchweizSDK;
export { stdutil, config, BaseFeature, VogelwarteSchweizEntityBase, VogelwarteSchweizSDK, SDK, };
