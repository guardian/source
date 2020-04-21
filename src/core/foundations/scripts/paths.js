const path = require("path")

// TODO: it would be good if this could be dynamically generated
const folders = [
	"accessibility",
	"mq",
	"palette",
	"themes",
	"typography",
	"utils",
]

module.exports.paths = folders.map(dirName => {
	return path.join("./", dirName)
})
