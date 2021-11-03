import { getV3Stories, getV4Stories } from './get-stories';

console.log('Comparing v3 and v4 stories');

const v3Stories = Object.keys(getV3Stories());
const v4Stories = getV4Stories();

const v3StoriesNotInV4 = v3Stories.filter(
	(story) => !v4Stories.includes(story),
);

const v4StoriesNotInV3 = v4Stories.filter(
	(story) => !v3Stories.includes(story),
);

if (v3StoriesNotInV4.length || v4StoriesNotInV3.length) {
	console.error('v3 and v4 stories are out of sync');
	if (v3StoriesNotInV4.length)
		console.error(
			'The following stories are present in v3 but not v4: ',
			v3StoriesNotInV4.join(', '),
		);
	if (v4StoriesNotInV3.length)
		console.error(
			'The following stories are present in v4 but not v3: ',
			v4StoriesNotInV3.join(', '),
		);
	process.exit(1);
} else {
	console.log('v3 and v4 stories are in sync');
	process.exit(0);
}
