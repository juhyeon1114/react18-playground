import { atom, selector } from 'recoil'
import { getPosts } from '../requests'

export const textState = atom({
  key: 'textState',
  default: '',
})

export const postsState = selector({
  key: 'postsState',
  get: async ({ get }) => {
    const text = get(textState)
    const req = await getPosts(text)
    return req.data
  },
})
