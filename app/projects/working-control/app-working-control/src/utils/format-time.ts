export function formatTime(time: any) {
  time += '';
  return `${time.padStart(2, '0')}`;
}
