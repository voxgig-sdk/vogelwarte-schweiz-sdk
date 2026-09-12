import { VogelwarteSchweizEntityBase } from '../VogelwarteSchweizEntityBase';
import type { VogelwarteSchweizSDK } from '../VogelwarteSchweizSDK';
import type { Control } from '../types';
import type { Species, SpeciesListMatch } from '../VogelwarteSchweizTypes';
declare class SpeciesEntity extends VogelwarteSchweizEntityBase<Species> {
    constructor(client: VogelwarteSchweizSDK, entopts: any);
    make(this: SpeciesEntity): SpeciesEntity;
    list(this: any, reqmatch?: SpeciesListMatch, ctrl?: Control): Promise<SpeciesEntity[]>;
}
export { SpeciesEntity };
