export const generateAnimationAtlas = (
	animation,
	length,
	sprite,
	backwards = false,
	animFile = null
) => {
	const frames = {};

	if (backwards) {
		for (let i = length; i >= 0; i--) {
			frames[`${animation}${i}`] = {
				frame: { x: 32 * i, y: 0, w: 32, h: 32 },
			};
		}
	} else {
		for (let i = 0; i < length; i++) {
			frames[`${animation}${i}`] = {
				frame: { x: 32 * i, y: 0, w: 32, h: 32 },
			};
		}
	}

	return {
		frames,
		animations: { [animation]: Object.keys(frames) },
		meta: { image: `/images/${sprite}/${animFile ?? animation}.png` },
	};
};
