export const formatRating = (rating: number): string => {
  return rating.toFixed(1).padEnd(3, '.0')
}