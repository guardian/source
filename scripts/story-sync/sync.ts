import { getV3Stories } from './get-stories';
import { writeStories } from './write-stories';

console.log('Syncing v3 and v4 stories');

const v3Stories = getV3Stories();

writeStories(v3Stories);
