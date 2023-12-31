export const FormatTime = (isoDate) => {
    const date = new Date(isoDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours < 12 ? 'AM' : 'PM';
  
    const formattedHours = hours % 12 || 12;
  
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };