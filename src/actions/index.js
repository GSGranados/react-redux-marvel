export const heroLookup = (heroName) => {
    return {
        type: "HERO_LOOKUP",
        payload: heroName,
    };
};
