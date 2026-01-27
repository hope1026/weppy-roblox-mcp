export const setLightingTool = {
    name: 'set_lighting',
    description: 'Set properties on the Lighting service to control global illumination, shadows, and environmental lighting. Common properties include Ambient, Brightness, ColorShift_Bottom, ColorShift_Top, EnvironmentDiffuseScale, EnvironmentSpecularScale, GlobalShadows, OutdoorAmbient, ShadowSoftness, and Technology.',
    inputSchema: {
        type: 'object',
        properties: {
            properties: {
                type: 'object',
                description: 'Dictionary of Lighting properties to set. Supports Color3 (use {r, g, b} with 0-255 range), numbers, booleans, and Enums (use "Enum.Technology.ShadowMap" format).',
                additionalProperties: true,
            },
        },
        required: ['properties'],
    },
};
export const setAtmosphereTool = {
    name: 'set_atmosphere',
    description: 'Set properties on the Atmosphere instance in Lighting to control atmospheric effects like fog, haze, and glare. Optionally creates an Atmosphere instance if one doesn\'t exist. Common properties: Color, Decay, Density, Glare, Haze, Offset.',
    inputSchema: {
        type: 'object',
        properties: {
            properties: {
                type: 'object',
                description: 'Dictionary of Atmosphere properties to set. Color and Decay use Color3 format {r, g, b} with 0-255 range. Density, Glare, Haze, and Offset are numbers.',
                additionalProperties: true,
            },
            createIfMissing: {
                type: 'boolean',
                description: 'If true, creates an Atmosphere instance in Lighting if one doesn\'t exist. Default: true',
            },
        },
        required: ['properties'],
    },
};
export const setSkyTool = {
    name: 'set_sky',
    description: 'Set properties on the Sky instance in Lighting to configure the skybox and celestial bodies. Optionally creates a Sky instance if one doesn\'t exist. Common properties: CelestialBodiesShown, MoonAngularSize, MoonTextureId, SkyboxBk/Dn/Ft/Lf/Rt/Up, StarCount, SunAngularSize, SunTextureId.',
    inputSchema: {
        type: 'object',
        properties: {
            properties: {
                type: 'object',
                description: 'Dictionary of Sky properties to set. Skybox textures should be asset IDs or rbxasset URLs. Angular sizes and StarCount are numbers. CelestialBodiesShown is boolean.',
                additionalProperties: true,
            },
            createIfMissing: {
                type: 'boolean',
                description: 'If true, creates a Sky instance in Lighting if one doesn\'t exist. Default: true',
            },
        },
        required: ['properties'],
    },
};
export const setTerrainTool = {
    name: 'set_terrain',
    description: 'Set properties on the Terrain instance in Workspace to configure water appearance and behavior. Common properties: WaterColor (Color3), WaterReflectance, WaterTransparency, WaterWaveSize, WaterWaveSpeed.',
    inputSchema: {
        type: 'object',
        properties: {
            properties: {
                type: 'object',
                description: 'Dictionary of Terrain properties to set. WaterColor uses Color3 format {r, g, b} with 0-255 range. Other properties are numbers.',
                additionalProperties: true,
            },
        },
        required: ['properties'],
    },
};
export const setTimeOfDayTool = {
    name: 'set_time_of_day',
    description: 'Set the time of day in the game, which affects sun position and lighting. Provide either a time string in "HH:MM:SS" format or a clockTime number (0-24). The time affects the Lighting.TimeOfDay and Lighting.ClockTime properties.',
    inputSchema: {
        type: 'object',
        properties: {
            time: {
                type: 'string',
                description: 'Time string in "HH:MM:SS" format (e.g., "14:30:00" for 2:30 PM). Use this OR clockTime, not both.',
            },
            clockTime: {
                type: 'number',
                description: 'Numeric time in 24-hour format (e.g., 14.5 for 2:30 PM). Valid range: 0-24. Use this OR time string, not both.',
            },
        },
    },
};
export const environmentTools = [
    setLightingTool,
    setAtmosphereTool,
    setSkyTool,
    setTerrainTool,
    setTimeOfDayTool,
];
//# sourceMappingURL=environment-tools.js.map