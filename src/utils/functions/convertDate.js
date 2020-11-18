export const ConvertDatePtBr = (date) => {
  if (date && date.includes('-')) {
    const newDate = date.split('-')

    return `${newDate[2]} /${newDate[1]} / ${newDate[0]}`;
  } else {
    return date;
  }
};
