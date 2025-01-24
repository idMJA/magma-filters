import { Plugin, Structure } from "magmastream";
import { FilterRoot } from "./type";
import data from "./data";

export class magmaFilters extends Plugin {
	public load() {
		Structure.extend(
			"Player",
			(Player) =>
				class extends Player {
					public async filter(type: String) {
						const filterData = data[type as keyof FilterRoot];
						if (!filterData) throw new Error(`Invalid filter options please check that is like this player.filter('bass')`);

						await this.node.rest.updatePlayer({
							guildId: this.guild,
							data: { filters: { filterData } },
						});
					}
				}
		);
	}
}
