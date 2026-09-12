import { VogelwarteSchweizEntityBase } from '../VogelwarteSchweizEntityBase';
import type { VogelwarteSchweizSDK } from '../VogelwarteSchweizSDK';
import type { Control } from '../types';
import type { Bird, BirdLoadMatch, BirdListMatch } from '../VogelwarteSchweizTypes';
declare class BirdEntity extends VogelwarteSchweizEntityBase<Bird> {
    constructor(client: VogelwarteSchweizSDK, entopts: any);
    make(this: BirdEntity): BirdEntity;
    load(this: any, reqmatch?: BirdLoadMatch, ctrl?: Control): Promise<BirdEntity>;
    list(this: any, reqmatch?: BirdListMatch, ctrl?: Control): Promise<BirdEntity[]>;
}
export { BirdEntity };
