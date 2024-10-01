import { appUrls } from "@/constants/urls"
import { LinkType } from "@/types/link.type"

export const navigation: LinkType[] = [
  { path: appUrls.home, name: 'Главная' },
  { path: appUrls.genres , name: 'Жанры' }
]