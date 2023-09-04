import alenaRhiel from '../images/chatImages/alena_rhiel.png';
import phillip from '../images/chatImages/phillip.png';
import alfredo from '../images/chatImages/alfredo.png';
import kierra from '../images/chatImages/kierra.png';
import jocelyn from '../images/chatImages/jocelyn.png';
import davis from '../images/chatImages/davis.png';
import rayna from '../images/chatImages/rayna.png';
import james from '../images/chatImages/james.png';
import jaylon from '../images/chatImages/jaylon.png';

// TODO: Fix generatind frame color / remove this at backend
import generateFrameColor from '../utils/generateFrameColor';

export const STATUS_MENU_LIST = [
  { path: 1, label: 'Working' },
  { path: 2, label: 'Available' },
  { path: 3, label: 'Not available' }
];

export const CHAT_USERS_LIST = [
  {
    id: 1,
    name: 'Alena Rhiel',
    surname: 'Madsen',
    avatar: alenaRhiel,
    status: 'available',
    frameColor: generateFrameColor()
  },
  {
    id: 2,
    name: 'Phillip',
    surname: 'Torff',
    avatar: phillip,
    status: 'notAvailable',
    frameColor: generateFrameColor()
  },
  {
    id: 3,
    name: 'Alfredo',
    surname: 'Vetrovs',
    avatar: alfredo,
    status: 'available',
    frameColor: generateFrameColor()
  },
  {
    id: 4,
    name: 'Kierra',
    surname: 'Press',
    avatar: kierra,
    status: 'working',
    frameColor: generateFrameColor()
  },
  {
    id: 5,
    name: 'Jocelyn',
    surname: 'Donin',
    avatar: jocelyn,
    status: 'working',
    frameColor: generateFrameColor()
  },
  {
    id: 6,
    name: 'Davis',
    surname: 'Dorwart',
    avatar: davis,
    status: 'available',
    frameColor: generateFrameColor()
  },
  {
    id: 7,
    name: 'Rayna',
    surname: 'Bator',
    avatar: rayna,
    status: 'working',
    frameColor: generateFrameColor()
  },
  {
    id: 8,
    name: 'James',
    surname: 'Kenter',
    avatar: james,
    status: 'available',
    frameColor: generateFrameColor()
  },
  {
    id: 9,
    name: 'Jaylon',
    surname: 'Botosh',
    avatar: jaylon,
    status: 'available',
    frameColor: generateFrameColor()
  }
];
