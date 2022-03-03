import { Cell } from '@ephox/katamari';

import Editor from 'tinymce/core/api/Editor';

import * as Options from '../api/Options';

export interface UiFactoryBackstageForHeader {
  isPositionedAtTop: () => boolean;
  getDockingMode: () => 'top' | 'bottom';
  setDockingMode: (mode: 'top' | 'bottom') => void;
}

export const HeaderBackstage = (editor: Editor): UiFactoryBackstageForHeader => {
  const mode = Cell<'top' | 'bottom'>(Options.isToolbarLocationBottom(editor) ? 'bottom' : 'top');

  return {
    isPositionedAtTop: () => mode.get() === 'top',
    getDockingMode: mode.get,
    setDockingMode: mode.set
  };
};
