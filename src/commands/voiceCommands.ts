import { createAudioResource } from "@discordjs/voice"
import path from 'path';
import { createReadStream } from "fs";

import { VoiceCommand } from "../models/voiceCommand.type";
import { player } from '../player';
import { Utils } from '../utils';
import { Option } from '../types/option.type';

const createOptionFromAssets = (): Option[] => {
	const options: Option[] = [];

	Utils.getAllAssets().forEach((op, index) => {
		const name = op.split('.')[0];

		options.push({
			id: index + 1,
			name,
			description: name, // should remove description
			action: (con) => {
				const resource = createAudioResource(createReadStream(path.join(__dirname + `/../assets/${name}.mp3`)));
				player.play(resource);
				con.subscribe(player);
			}
		});
	});

	return options;
};

export const VoiceCommands: VoiceCommand[] = [
	new VoiceCommand({
		id: 'play',
		name: 'play',
		description: 'Toca algum som do Vai dar Namoro!',
		options: createOptionFromAssets()
	})
];
