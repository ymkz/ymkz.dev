import dayjs from 'dayjs'

export function formatDate(at: string): string {
  return dayjs(at).locale('ja').format('YYYY/MM/DD')
}
