import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.PHOENIXDARK,
    // Mutant
    CHAMPION.WEAPONX,
    // Skill
    CHAMPION.HOOD,
    CHAMPION.REDSKULL,
    // Mystic
    CHAMPION.DORMAMMU,
    CHAMPION.DRSTRANGEMARVELNOW,
    CHAMPION.SCARLETWITCHULTIMATE,
    // Universal
    CHAMPION.MAESTRO,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
