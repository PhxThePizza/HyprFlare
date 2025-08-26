class game {
    constructor(settings, defaults, stats, stats_defaults) {
        if (settings == null) {
            this.settings = defaults
        }
        else {
        this.settings = settings;
        }
        if (stats == null) {
            this.stats = stats_defaults
        }
        else {
        this.stats = stats;
        }
    }
}
const gameinfo = new game();