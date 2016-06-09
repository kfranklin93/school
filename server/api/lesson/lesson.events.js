/**
 * Lesson model events
 */

'use strict';

import {EventEmitter} from 'events';
import Lesson from './lesson.model';
var LessonEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LessonEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Lesson.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LessonEvents.emit(event + ':' + doc._id, doc);
    LessonEvents.emit(event, doc);
  }
}

export default LessonEvents;
