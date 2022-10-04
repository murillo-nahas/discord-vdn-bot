import { createAudioResource } from "@discordjs/voice"
import path from 'path';
import { createReadStream } from "fs";

import { VoiceCommand, VoiceOption } from "../types/voiceCommand.type";
import { player } from '../player';
import { Utils } from '../utils';

const createOptionFromAssets = (): VoiceOption[] => {
	const options: VoiceOption[] = [];

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
	{
		id: 'play',
		name: 'play',
		description: 'Toca algum som do Vai dar Namoro!',
		options: createOptionFromAssets(),
		type: 'voice'
	}
];
