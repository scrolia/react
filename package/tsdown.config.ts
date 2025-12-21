import { defineConfig } from "@apst/tsdown";
import { cjsPreset, dtsPreset, esmPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            // public
            index: "./src/index.ts",
            // internal
            "contexts/scrollcore": "./src/contexts/scrollcore.ts",
            "functions/props": "./src/functions/props.ts",
            "hooks/length": "./src/hooks/length.ts",
            "hooks/scroll": "./src/hooks/scroll.ts",
            "hooks/thumb": "./src/hooks/thumb.ts",
        },
        platform: "browser",
    },
    [
        esmPreset(),
        cjsPreset(),
        dtsPreset(),
    ],
);
