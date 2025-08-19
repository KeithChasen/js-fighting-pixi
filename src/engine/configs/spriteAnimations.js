export const loadAtlasData = sprite => {
	const frames = {};
	for (let i = 0; i < 6; i++) {
		frames[`idleLeft${i + 1}`] = {
			frame: { x: 32 * (i + 1), y: 32, w: 32, h: 32 },
		};
	}

	for (let i = 0; i < 7; i++) {
		frames[`walkLeft${i + 1}`] = {
			frame: { x: 32 * (i + 1), y: 0, w: 32, h: 32 },
		};
	}

	for (let i = 0; i < 5; i++) {
		frames[`punchLeft${i + 1}`] = {
			frame: { x: 32 * (i + 1), y: 64, w: 32, h: 32 },
		};
	}

	for (let i = 0; i < 4; i++) {
		frames[`kickLeft${i + 1}`] = {
			frame: { x: 32 * (i + 1), y: 96, w: 32, h: 32 },
		};
	}

	for (let i = 0; i < 6; i++) {
		frames[`flip${i + 1}`] = {
			frame: { x: 32 * (i + 1), y: 224, w: 32, h: 32 },
		};
	}

	for (let i = 5; i >= 0; i--) {
		frames[`backFlip${i + 1}`] = {
			frame: { x: 32 * (i + 1), y: 224, w: 32, h: 32 },
		};
	}

	return {
		frames,
		meta: {
			image: `/images/${sprite}-40.png`,
			size: { w: 256, h: 1280 },
		},
		animations: {
			idleLeft: Object.keys(frames).filter(key => key.includes('idleLeft')),
			walkLeft: Object.keys(frames).filter(key => key.includes('walkLeft')),
			punchLeft: Object.keys(frames).filter(key => key.includes('punchLeft')),
			kickLeft: Object.keys(frames).filter(key => key.includes('kickLeft')),
			flip: Object.keys(frames).filter(key => key.includes('flip')),
			backFlip: Object.keys(frames).filter(key => key.includes('backFlip')),
		},
	};
};
