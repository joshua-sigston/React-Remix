const dummyData = [
  {
      id: 'e1',
      title: 'first expense',
      amount: 12.39,
      date: new Date().toISOString()
  },
  {
      id: 'e2',
      title: 'first expense',
      amount: 12.39,
      date: new Date().toISOString()
  }
]


export function loader() {
  return dummyData
}