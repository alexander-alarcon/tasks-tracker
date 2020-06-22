import { createSelector } from '@reduxjs/toolkit';

import { getGroupEntities, getGroupIds, getTaskEntities } from './entities';
import { emptyObject } from './utils';

export const getModalIsOpen = ({ group }) => group.isModalOpen || false;

export const getModalCurrentId = ({ group }) => group.currentId || null;

export const getModalGroup = createSelector(
  getGroupEntities,
  getModalCurrentId,
  (entities, id) => {
    return entities[id] || emptyObject;
  }
);

export const getAllGroups = createSelector(
  getGroupEntities,
  getGroupIds,
  getTaskEntities,
  (entities, ids, tasks) => {
    return ids
      .map((id) => entities[id])
      .map((group) => {
        const groupTasks = (group.tasks || [])
          .map((id) => ({
            ...tasks[id],
            formattedDate: new Date(tasks[id].date).toDateString(),
          }))
          .sort((a, b) => {
            return (
              (a.completed === b.completed ? 0 : a.completed - b.completed) ||
              (a.date === b.date ? 0 : b.date - a.date)
            );
          });

        const progress =
          groupTasks.filter((task) => task.completed).length /
          groupTasks.length;

        return {
          ...group,
          date: new Date(group.date).toDateString(),
          tasks: groupTasks,
          progress,
        };
      });
  }
);
