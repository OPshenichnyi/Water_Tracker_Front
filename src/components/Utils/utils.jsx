export const decrease = (count, setCount) => {
  if (count < 50) {
    return setCount(0);
  }
  setCount(count - 50);
};

export const generateTimeOptions = () => {
  const options = [];
  for (let i = 0; i < 24 * 60; i += 5) {
    const hours = Math.floor(i / 60);
    const minutes = i % 60;
    const timeString = `${hours.toString()}:${minutes
      .toString()
      .padStart(2, '0')}`;
    options.push(
      <option key={i} value={i}>
        {timeString}
      </option>
    );
  }
  return options;
};

export const handleUpdateCount = (inputValue, setCount, setInputValue) => {
  const newValue = parseInt(inputValue, 10);
  if (!isNaN(newValue)) {
    setCount(newValue);
    setInputValue('');
  } else {
    alert('Будь ласка, введіть число.');
  }
};

export const setInitialTime = setSelectedTime => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;
  setSelectedTime(currentTime - (currentTime % 5));
};

export const modalScrollOff = active => {
  if (active) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
