import { join } from "path"

// TODO: it would be good if this could be dynamically generated
const folders = [
	"accessibility",
	"mq",
	"palette",
	"size",
	"themes",
	"typography",
	"utils",
]

export const paths = folders.map(dirName => {
	return join("./", dirName)
})
