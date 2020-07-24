import dayjs from 'dayjs'

export const formatDate = (at: string): string => {
  return dayjs(at).locale('ja').format('YYYY/MM/DD')
}
