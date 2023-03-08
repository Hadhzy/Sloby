import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { TToastTheme, TToastPosition } from '../../utils/types';
function PopupSystem({
  msg,
  theme,
  position,
  state,
}: {
  msg: string;
  theme: TToastTheme;
  position: TToastPosition;
  state: boolean;
}) {
  toast(msg, {
    position,
  });
  return (
    <>
      {state && (
        <ToastContainer position={position} theme={theme} autoClose={5000} />
      )}
    </>
  );
}

export default PopupSystem;
