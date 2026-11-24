import type {VocabPartOfSpeech } from "@/types/course";
// import { VOCAB_PART_OF_SPEECH_SHORTEN } from "@/types/course";

export const appendPartOfSpeech = (item: React.ReactNode, partOfSpeech: VocabPartOfSpeech) => {
  // if( partOfSpeech !== "expression") {
  //   return <>{item} <span style={{ fontStyle: 'italic', fontWeight: "300" }}>({VOCAB_PART_OF_SPEECH_SHORTEN[partOfSpeech]})</span></>;
  // }

  return item;
};