import { atom } from 'jotai';

// State to track the number of "Likes/Hearts" given by the visitor
export const likeCountAtom = atom<number>(0);

// State to track the active section in navigation
export const activeSectionAtom = atom<string>('home');

// State for contact form modal
export const isContactModalOpenAtom = atom<boolean>(false);