import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word, Definition } from '../interfaces/dictionary';

const initialState: Word = {
  word: 'wallpaper',
  meaning: 'decorative paper for the walls of a room the background image or set of images displayed on a computer screen',
  phonetic: 'ˈwȯl-ˌpā-pər',
  type: 'noun'
};

const setMeaning: CaseReducer<Word, PayloadAction<Definition>> =
  (state: Word, action: PayloadAction<Definition>) => {
    const { meta, hwi, fl, shortdef } = action.payload;
    state.word = meta.id.replace(':1', '');
    state.phonetic = hwi.prs?.filter((prs) => prs.mw)[0].mw || '',
    state.meaning = shortdef.join('\n');
    state.type = fl;
};

const meaningSlice = createSlice({
  name: 'meaningSlice',
  initialState,
  reducers: {
    setMeaning
  }
});

export const meaningSliceActions = meaningSlice.actions;
export default meaningSlice.reducer;
