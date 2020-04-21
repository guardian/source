const cpy = require("cpy")
const { paths } = require("./paths")

// TODO: it would be good if this could be dynamically generated
const paletteFolders = ["background", "border", "line", "text"]

// Copy types for each submodule into the folder for the cjs endpoint
paths.forEach(submodule => {
	cpy(`${submodule}/*.d.ts`, `${submodule}/cjs`)

	if (submodule === "palette") {
		paletteFolders.forEach(paletteFolder => {
			cpy(
				`${submodule}/${paletteFolder}/*.d.ts`,
				`${submodule}/cjs/${paletteFolder}`,
			)
		})
	}
})
