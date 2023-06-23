'use client';
import React from 'react';
import ActivityCalendar, { ThemeInput } from 'react-activity-calendar';

type Props = {
  contrubitions: any;
};

const explicitTheme: ThemeInput = {
  dark: ['#161a1f', '#224746', '#428988', '#72bbba', '#93cbca'],
};

const GithubActivities = ({ contrubitions }: Props) => {
  return (
    <div className="my-14 ">
      <h2 className="text-2xl text-light-textHeader dark:text-dark-textHeader font-bold my-8">
        Github Contrubitions Info
      </h2>
      <div className="w-full flex items-center justify-center">
        <ActivityCalendar
          theme={explicitTheme}
          data={contrubitions.contributions}
          labels={{
            legend: {
              less: 'Less',
              more: 'More',
            },
            months: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            totalCount: `${
              contrubitions.total.lastYear
            } activities in ${new Date().getFullYear()}`,

            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          }}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
};

export default GithubActivities;

('{{count}} activities in {{year}}');
