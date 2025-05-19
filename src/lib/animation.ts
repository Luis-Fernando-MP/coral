const anim = {
	old: {
		name: 'bump',
		duration: '0.5s',
		easing: 'ease-in',
		direction: 'reverse',
		fillMode: 'forwards'
	},
	new: {
		name: 'bump',
		duration: '0.5s',
		easing: 'ease-in-out',
		fillMode: 'forwards'
	}
}

export const tAnimation = {
	forwards: anim,
	backwards: anim
}
