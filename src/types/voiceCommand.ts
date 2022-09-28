export type VoiceCommand = {
	id: number;
	name: string;
	description: string;
	action: () => void
}
