export default defineConfig([
    js.configs.recommended,
    {
        files: ["**/*.ts"],
        plugins: {
            // Se define un alias para el plugin
            '@typescript-eslint': tsPlugin, 
        },
        // Usas 'extends' para referenciar la configuración del plugin por su alias
        extends: [
            // El formato es '<alias-del-plugin>/<nombre-de-la-config>'
            'standard', 
        ],
        languageOptions: {
            sourceType: "module",
        }
    }
]);