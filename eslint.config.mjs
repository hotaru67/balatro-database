import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import json from "@eslint/json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
        plugins: {
            json,
        },
    },

    // lint JSON files
    {
        files: ["**/*.json"],
        language: "json/json",
        rules: {
            "json/no-duplicate-keys": "error",
        },
    },  
];

export default eslintConfig;
