import { Intercom } from '../intercom/intercom';
export declare class IntercomTrackEventDirective {
    private intercom;
    event: string;
    intercomTrackEvent: string;
    metadata: any;
    constructor(intercom: Intercom);
    onClick(): void;
}
