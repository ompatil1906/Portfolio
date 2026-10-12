export declare function getAudioContext(): AudioContext
export declare function decodeAudioData(dataUri: string): Promise<AudioBuffer>
export interface PlaySoundOptions {
  volume?: number
  playbackRate?: number
  onEnd?: () => void
}
export interface SoundPlayback {
  stop: () => void
}
export declare function playSound(
  dataUri: string,
  options?: PlaySoundOptions
): Promise<SoundPlayback>
