import { Intercom } from '../intercom/intercom';
export declare class IntercomHideDirective {
    private intercom;
    intercomHide: boolean;
    constructor(intercom: Intercom);
    onClick(): void;
}
