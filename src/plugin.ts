import {
  Structure,
  Plugin
} from 'magmastream';
import data from "./data"
import { FilterRoot } from "./type"


export class magmastreamPlugin extends Plugin {
	public load() {
		Structure.extend(
			'Player',
			Player =>
        class extends Player {
          
					public async filter(type: string) {
    
            const filterData = data[type as keyof FilterRoot]
    
            if (!filterData) throw new Error("Provid a valid filter eg: player.filter('bass')")
            
            this.node.rest.updatePlayer({
							data: { filters: { filterData } },
							guildId: this.guild,
						});


      }
    })
  }
}