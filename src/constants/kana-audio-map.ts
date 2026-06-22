import kanaRomajiToAudioIndexJson from '@/constants/kana-audio-map.json'

export const kanaRomajiToAudioIndex: Record<string, number> = kanaRomajiToAudioIndexJson

export const NHK_HLS_BASE = 'https://vod-stream.nhk.jp/nhkworld/lesson/assets/data/hls'

export function getKanaAudioLocalPath(romaji: string) {
  return `/audio/kana/${romaji}.m4a`
}
