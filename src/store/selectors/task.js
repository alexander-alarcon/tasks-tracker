import { createSelector } from '@reduxjs/toolkit';
import { getGroupEntities } from './group';

const emptyObject = {};
export const getTaskEntities = ({ task }) => task.entities;

export const getModalIsOpen = ({ task }) => task.isModalOpen || false;

export const getModalCurrentId = ({ task }) => task.currentId || null;

export const getModalGroupId = ({ task }) => task.groupId || null;

export const getModalTask = createSelector(
  getTaskEntities,
  getModalCurrentId,
  (entities, id) => {
    return entities[id] || emptyObject;
  }
);

export const getModalColor = createSelector(
  getGroupEntities,
  getModalGroupId,
  (entities, id) => {
    return entities[id] && entities[id].color;
  }
);
