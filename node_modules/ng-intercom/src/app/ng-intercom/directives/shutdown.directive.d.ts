import { Intercom } from '../intercom/intercom';
export declare class IntercomShutdownDirective {
    private intercom;
    intercomShutdown: boolean;
    constructor(intercom: Intercom);
    onClick(): void;
}
