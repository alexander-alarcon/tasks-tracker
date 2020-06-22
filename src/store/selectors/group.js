import { createSelector } from '@reduxjs/toolkit';

const emptyObject = {};

export const getGroupEntities = ({ group }) => group.entities;

export const getModalIsOpen = ({ group }) => group.isModalOpen || false;

export const getModalCurrentId = ({ group }) => group.currentId || null;

export const getModalGroup = createSelector(
  getGroupEntities,
  getModalCurrentId,
  (entities, id) => {
    return entities[id] || emptyObject;
  }
);
