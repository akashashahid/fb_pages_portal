import { Intercom } from '../intercom/intercom';
export declare class IntercomShowNewMessageDirective {
    private intercom;
    message: string;
    intercomShowNewMessage: string;
    constructor(intercom: Intercom);
    onClick(): void;
}
