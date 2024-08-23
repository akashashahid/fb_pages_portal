import { Intercom } from '../intercom/intercom';
export declare class IntercomShowMessagesDirective {
    private intercom;
    intercomShowMessages: boolean;
    constructor(intercom: Intercom);
    onClick(): void;
}
