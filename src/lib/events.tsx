import {EventEmitter} from 'events';
export const Bus =  new EventEmitter();
export const EventList={
    AddQuestion : "AddQuestion",//
    AddAnswer : "AddAnswer",//
    UpdateCommentCount : "UpdateCommentCount"//number
}