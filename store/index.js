export const state = () => ({
  memoInfoList: [
    {
      posX: 20,
      posY: 20,
      text: 'fafewafa'
    }
  ]
})

export const mutations = {
  addMemo(state) {
    const lastMemo = state.memoInfoList[state.memoInfoList.length - 1]

    state.memoInfoList = [
      ...state.memoInfoList,
      {
        posX: lastMemo.posX + 220,
        posY: lastMemo.posY + 20,
        text: ''
      }
    ]
  }
}
