import { generateAnimationAtlas } from '../generateAnimationAtlas';

export const atlases = {
	idle: generateAnimationAtlas('idle', 6, 'v'),
	walk: generateAnimationAtlas('walk', 7, 'v'),
	punch: generateAnimationAtlas('punch', 5, 'v'),
	kick: generateAnimationAtlas('kick', 4, 'v'),
	frontFlip: generateAnimationAtlas('frontFlip', 6, 'v', false, 'flip'),
	backFlip: generateAnimationAtlas('backFlip', 5, 'v', true, 'flip'),
};
