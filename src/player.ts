import { createAudioPlayer, NoSubscriberBehavior } from "@discordjs/voice";

export const player = createAudioPlayer({
  behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
  },
});
