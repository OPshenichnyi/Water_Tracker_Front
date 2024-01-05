import React, { useState } from 'react';
import icons from '../../common/symbol-defs.svg';
import { CloseBtn, DailyModal, Date, Value } from './DaysGeneralStats.styled';

export default function DaysGeneralStats() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>OpenDailyStatsModal</button>

      {open && (
        <DailyModal>
          {' '}
          <Date>5,April</Date>
          <CloseBtn onClick={handleClose}>
            {' '}
            <svg width={12} height={12} stroke="#407BFF">
              <use href={`${icons}#icon-cross`} />
            </svg>
          </CloseBtn>
          <p>
            Daily norma:<Value> 1.5 L</Value>
          </p>
          <p>
            Fulfillment of the daily norm:<Value> 50%</Value>
          </p>
          <p>
            How many servings of water:<Value> 6</Value>
          </p>
        </DailyModal>
      )}
    </div>
  );
}
