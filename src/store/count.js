import { atom, selector } from 'recoil'

export const countState = atom({
  key: 'countState',
  default: 1,
})

export const percent = selector({
  key: 'percentState',
  get: ({ get }) => {
    const count = get(countState)
    return `${count}%`
  },
})
