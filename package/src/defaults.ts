/* eslint-disable import/prefer-default-export */

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
} from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange } from './types';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: 'Today',
    startDate: date,
    endDate: date,
  },
  {
    label: 'Yesterday',
    startDate: addDays(date, -1),
    endDate: addDays(date, -1),
  },
  {
    label: 'This\u00A0Week',
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: 'Last\u00A0Week',
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1)),
  },
  {
    label: 'Last\u00A07\u00A0Days',
    startDate: addWeeks(date, -1),
    endDate: date,
  },
  {
    label: 'This\u00A0Month',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: 'Last\u00A0Month',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
