const getDirectory = () => {
	if (Deno.build.os === "windows") {
		return Deno.env.get("TMP") || Deno.env.get("TEMP") || Deno.env.get("USERPROFILE") || Deno.env.get("SystemRoot") || ""
	}

	return Deno.env.get("TMPDIR") || "/tmp"
}

/**
Get the path of the system temp directory.
*/
const tempDirectory = Deno.realPathSync(getDirectory())

export default tempDirectory
