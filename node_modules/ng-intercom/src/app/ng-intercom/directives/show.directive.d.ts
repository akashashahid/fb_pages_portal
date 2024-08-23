import { Intercom } from '../intercom/intercom';
export declare class IntercomShowDirective {
    private intercom;
    message: string;
    intercomShow: string;
    constructor(intercom: Intercom);
    onClick(): void;
}
