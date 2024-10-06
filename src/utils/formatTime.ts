export const formatTime = (time: number): string => {
  if (time > 60) {
    const hours = Math.trunc(time / 60);
    const minuts = time % 60

    return `${hours} ч ${minuts} мин`
  } else {
    return `${time} мин`
  }
}