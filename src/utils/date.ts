import { format } from 'light-date'

export const formatDate = (at: string): string => {
  return format(new Date(at), '{yyyy}/{MM}/{dd}')
}
